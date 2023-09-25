import { productRepository } from "../services/databaseRepositories/productRepository";
import { Request, Response } from "express";

export const getProductController = async (req: Request, res: Response) => {
    try {
        const products = await productRepository.find({ select: ['id', 'name', 'price', 'brand'] , relations: ['brand']});
        return res.status(200).json({ success: true, products });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}