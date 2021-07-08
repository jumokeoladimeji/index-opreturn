const { op_return } = require('../models');
/**
 * @description - Fetches OpReturn
 * 
 * 
*/
const getOpReturn = async (opReturn) => {
    const opReturnData = await op_return.findOne({
        where: { op_return: opReturn },
        attributes: [ 'blockhash', 'txhash' ],
    });
    return opReturnData;
};

    
const createOpReturn = async (opReturnDetails) => {
    const opReturnToCreate = {
        txhash: opReturnDetails.txhash,
        blockhash: opReturnDetails.blockhash,
        op_return: Buffer.from(opReturnDetails.opReturnData, 'hex').toString('utf8'),
        blockheight: opReturnDetails.blockheight
    }
    const newOpReturn = await op_return.create(opReturnToCreate);
    return newOpReturn.toJSON();
};

/**
  * @description - Fetches a OpReturn
*/
const getLastSavedBlockHeight = async () => {
    const opReturnBlockheight = await op_return.findAll({
        attributes: [ 'blockheight' ],
        limit: 1,
        order: ['createdAt']
    });
    if (!opReturnBlockheight) {
        return {
            error: 'opReturnBlockheight not found',
            status: 404
        }
    }
    // blockHeight = parseInt(blockHeight);
    return opReturnBlockheight || opReturnBlockheight.toJSON();
};

module.exports = {
    getOpReturn,
    createOpReturn,
    getLastSavedBlockHeight
};