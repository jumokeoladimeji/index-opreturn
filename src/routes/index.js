import cors from 'cors';
import opReturnRouter from './opreturn';

export default (app) => {
    app.use(cors());
    app.use('/opreturn', opReturnRouter);
    app.get('/', (req, res) => {
        res.json({ mesage: 'Welcome to OPRETURN APP' })
    })

    app.use((err, req, res, next) => {
        res.status(500).json({error: 'an error occurred'});
    });
}
