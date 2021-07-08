const { getAndSaveOpReturnData } = require('./save-indexed-opreturn-data');

/**
 * Index and store Bitcoin OP_RETURN data for all transactions after a certain block
 *
 * startHeight=blockCount/passed startHeight
 * endHeight=blockCount
 * 
 */
const parseMultipleBlocks = async (startHeight, endHeight, bitcoindClient) => {
    //loop through once if no startHeight is passed
    for (let i = startHeight; i <= endHeight; i++ ) {
        const blockHash = await bitcoindClient.getBlockHash(i);
        const block = await bitcoindClient.getBlock(blockHash);
        await getAndSaveOpReturnData(block, bitcoindClient);
    }

}

module.exports = { parseMultipleBlocks };
