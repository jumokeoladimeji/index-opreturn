const { parseMultipleBlocks } = require('./parse-multiple-blocks');
const { getLastSavedBlockHeight } =  require('../../services/opreturn');

//add OP_RETURN data of newly mined blocks
const syncNewlyMinedBlocksData = async (newMinedBlockHeight, endHeight, bitcoindClient) => {
    const lastSavedBlockHeight = await getLastSavedBlockHeight();
  
    if (lastSavedBlockHeight < endHeight) {
        await parseMultipleBlocks(lastSavedBlockHeight, newMinedBlockHeight, bitcoindClient);
    }
}

module.exports = { syncNewlyMinedBlocksData };