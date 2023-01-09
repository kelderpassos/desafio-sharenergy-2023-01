/* eslint-disable no-console */
import 'dotenv/config';
import { App } from './app';
import { connectToDatabase } from '../database/connection';

const { PORT } = process.env;

connectToDatabase()
  .then(() => {
    new App().start(PORT);
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });
