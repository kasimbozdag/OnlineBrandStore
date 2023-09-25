import { AppDataSource } from "../../datasources/getDataSource";
import { Brand } from "../../entities/Brand";

export const brandRepository = AppDataSource.getRepository(Brand);