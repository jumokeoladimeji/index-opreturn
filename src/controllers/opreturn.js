import { getOpReturn } from '../services/opreturn';

const opReturnController = {
    getOpReturnData: async(opReturnHex) => {
      const opReturnBUffer =  Buffer.from(opReturnHex,'hex').toString('utf8');
      const opReturnData = await getOpReturn(opReturnBUffer);
      if(!opReturnData) {
        return {
          success: false,
          status: 404,
          error: 'OP_RETURN Not Found',
        };
      }
      if(opReturnData) {
        return {
          success: true,
          data: opReturnData,
          status: 200
        };
      }
    }
}

export default opReturnController;