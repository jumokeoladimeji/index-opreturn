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

module.exports = {
    getOpReturn
};