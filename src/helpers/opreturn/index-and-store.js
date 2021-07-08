require('dotenv').config();

const zeromq = require('zeromq'), sock = zeromq.socket('sub');
const BitcoinCore = require('bitcoin-core');

const { rpcConfig, zeromqTCP } = require('../../config/config')
const { syncNewlyMinedBlocksData } = require('./sync-new-block');
const { parseMultipleBlocks } = require('./parse-multiple-blocks');
 
const insertAndStoreData = async () => {
  try {
    const startHeight = parseInt(process.argv[2], 10);
    const bitcoindClient = new BitcoinCore(rpcConfig);
    const blockCount = await bitcoindClient.getBlockCount();
    // use blockCount if no startHeight is passed
    const startingBlockHeight =  startHeight || blockCount;
    const endBlockHeight = blockCount;
    await parseMultipleBlocks(startingBlockHeight, endBlockHeight, bitcoindClient);

    sock.connect(zeromqTCP); 
    //listen for and sync newly mined blocks
    sock.on('message', async function(topic, message) {
      if (topic.toString() === 'hashblock') {
        const blockHash = message.toString('hex');
        const block = await bitcoindClient.getBlock(blockHash);
        const newMinedBlockHeight = block.height;

        await syncNewlyMinedBlocksData(newMinedBlockHeight, endBlockHeight, bitcoindClient);
      }
    });
    sock.subscribe('hashblock');
  }
  catch(error) {
    console.log(error);
  }
}


insertAndStoreData();