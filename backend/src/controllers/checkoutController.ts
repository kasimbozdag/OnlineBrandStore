import { orderRepository } from "../services/databaseRepositories/orderRepository";
import { Order } from "../entities/Order";
import { productRepository } from "../services/databaseRepositories/productRepository";
import { Request, Response } from "express";
import { orderNotificationMailService } from "../services/mailServices/sendMailService";


export const checkoutController = async (req: Request, res: Response) => {
    try {
        const { clientName, clientAddress, shippingOption, cart } = req.body;

        // Validate form data (you can use libraries like 'joi' or 'express-validator').
        // For simplicity, not shown here.
        let totalProductValue = 0
        cart.forEach(async (prod: any) => {
            const product = await productRepository.findOne({ where: { id: prod.id } });
            if (product) {
                totalProductValue += product.price;
            }
        });

        const shippingCost = shippingOption === 'express' ? 10 : 0; // EUR

        const totalShippingValue = shippingCost;

        const order = new Order();
        order.client_name = clientName;
        order.client_address = clientAddress;
        order.total_product_value = totalProductValue;
        order.total_shipping_value = totalShippingValue;

        const savedOrder = await orderRepository.save(order);
        orderNotificationMailService(savedOrder.id.toString());

        return res.status(200).json({ success: true, orderId: savedOrder.id });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};