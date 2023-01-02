import express from 'express';
import 'express-async-errors';
import { userRoute } from './routes/UserRoute';

const app = express();

app.use(express.json());
app.use('/users', userRoute);
