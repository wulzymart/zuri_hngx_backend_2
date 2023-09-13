import Express from 'express';
import cors from 'cors';
import connectDB from './connectDb.js';
import dotEnv from 'dotenv';
import router from './routes/person.js';
import morgan from 'morgan';
import validate from './middlewares/requestValidator.js';
dotEnv.config();

const port = process.env.PORT;
const app = Express();

// middlewares
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.use(Express.json());
app.use('/api', validate, router);

// starting the sever
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};
start();
