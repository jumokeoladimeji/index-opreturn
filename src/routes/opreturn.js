import express from 'express';

import opReturnHandler from '../requestHandler/opreturn';

const opReturnRouter = express.Router();

opReturnRouter
    .get('/:opReturnData', opReturnHandler.get)

export default opReturnRouter;
