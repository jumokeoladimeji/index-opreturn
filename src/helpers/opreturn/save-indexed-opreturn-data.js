const { createOpReturn } = require('../../services/opreturn');

//store OP_RETURN data for a block
const getAndSaveOpReturnData = async (block, bitcoindClient) => {
    try {
        const blockTransactions = block.tx;
            for (transaction of blockTransactions){
                const rawTransaction = await bitcoindClient.getRawTransaction(transaction, 1, block.hash);

                const vout = rawTransaction.vout;
                let opReturnData;
                        
                    // get output with op_return
                    for (output of vout){
                        //output type is nulldata for OP_RETURN
                        if (output.scriptPubKey.type==='nulldata'){
                          opReturnData = output.scriptPubKey.hex;
                          break;  //Only one OP_RETURN output is allowed per tx so we break when we find that output
                        }
                    }
                    if (opReturnData){
                        await createOpReturn({ 
                            opReturnData,
                            txhash: rawTransaction.hash,
                            blockhash: block.hash,
                            blockheight: block.height
                        });
                    }
            }   
        
        }    
        catch (error) {
            console.error('tehher=====', error);    
        }
    }

     module.exports = { getAndSaveOpReturnData };