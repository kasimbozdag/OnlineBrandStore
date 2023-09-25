import { setMaxIdleHTTPParsers } from "http";
import { AppDataSource } from "../datasources/getDataSource";

export const initializeDatabase = async () => {
    const appDataSource= await AppDataSource.initialize();
    const queryRunner = await appDataSource.createQueryRunner();

    try {
        var result = await queryRunner.manager.query(
            `CREATE DATABASE test;`
        );

    }
    catch (e) {}
   
    await queryRunner.release();
    await AppDataSource.close();
    AppDataSource.setOptions({database: 'test', synchronize: true});
    await AppDataSource.initialize();
}