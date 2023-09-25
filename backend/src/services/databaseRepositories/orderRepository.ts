import { AppDataSource } from "../../datasources/getDataSource";
import { Order } from "../../entities/Order";

export const orderRepository = AppDataSource.getRepository(Order);