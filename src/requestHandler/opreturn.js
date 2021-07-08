import opReturnController from '../controllers/opreturn';

const opReturnHandler = {
  get: async(request, response) => {
    try {
      const opReturnDataResponse = await opReturnController.getOpReturnData(request.params.opReturnData);
      return response.status(opReturnDataResponse.status).json(opReturnDataResponse);
    } catch (error) {
      return response.status(500).json({
        error: 'Internal server error'
      });
    }
  }
}

export default opReturnHandler;
