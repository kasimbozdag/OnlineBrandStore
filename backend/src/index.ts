/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
import app from './app';
import { AppDataSource } from './datasources/getDataSource';
import { port } from '../config/env_variables';
import db from '../config/database';

app
  .listen(port, async () => {
    console.log(`server running on port : ${port}`);
    console.log(db)
    await AppDataSource.initialize();
  })
  .on('error', (e: any) => console.log(e));
