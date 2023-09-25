import { Product } from "../../entities/Product";
import { AppDataSource } from "../../datasources/getDataSource";

export const productRepository = AppDataSource.getRepository(Product);