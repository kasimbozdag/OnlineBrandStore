/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
require('dotenv').config();
import 'reflect-metadata';
import db from '../../config/database';
import { DataSource } from 'typeorm';
import path from 'path';

const parentDir = path.join(__dirname, '..');
const AppDataSource = new DataSource({
  type: 'postgres',
  host: db.host,
  port: parseInt(db.port),
  username: db.user,
  password: db.password,
  database: db.name,
  synchronize: false ,
  logging: false,
  entities: [`${parentDir}/entities/**/*{.ts,.js}`],
  migrations: [`${parentDir}/migrations/**/*{.ts,.js}`],
  subscribers: [`${parentDir}/subscriber/**/*{.ts,.js}`],
  /*cli: {
    entitiesDir: 'src/database/models',
    migrationsDir: 'src/database/migration',
    subscribersDir: 'src/database/subscriber',
  },*/
});

export {AppDataSource};