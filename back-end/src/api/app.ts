import express from 'express';
import 'express-async-errors';
import { errorHandler } from './middlewares/error';
import { userRoute } from './routes/UserRoute';

const app = express();

app.use(express.json());
app.use('/users', userRoute);
app.use(errorHandler);

export { app };
