import { orderRepository } from "../services/databaseRepositories/orderRepository";
import { Request, Response } from "express";

export const getOrderController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const orderId = parseInt(id);
        const order = await orderRepository.findOne({ where : { id: orderId } });
        if (!order) {
            return res.status(400).json({ success: false, message: 'Order not found' });
        }

        return res.status(200).json({ success: true, order: {
            id: order.id,
            clientName: order.client_name,
            clientAddress: order.client_address,
            totalProductValue: order.total_product_value,
            totalShippingValue: order.total_shipping_value
        } });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}