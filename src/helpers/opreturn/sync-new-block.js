const { parseMultipleBlocks } = require('./parse-multiple-blocks');
const { getLastSavedBlockHeight } =  require('../../services/opreturn');

//add OP_RETURN data of newly mined blocks
const syncNewlyMinedBlocksData = async (newMinedBlockHeight, endHeight, bitcoindClient) => {
    const lastBlockHeight = await getLastSavedBlockHeight();

    if (lastBlockHeight >= endHeight) {
        await parseMultipleBlocks(lastBlockHeight, newMinedBlockHeight, bitcoindClient);
    }
}

module.exports = { syncNewlyMinedBlocksData };