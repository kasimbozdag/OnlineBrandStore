import { Repository } from 'typeorm';
import { AppDataSource } from '../src/datasources/getDataSource';
import { Order } from '../src/entities/Order';
import { initializeDatabase } from '../src/helpers/utils';

describe('Order Model', () => {
    let orderRepo: Repository<Order>;

    beforeAll(async () => {
        await initializeDatabase();
        orderRepo = AppDataSource.getRepository(Order);
    });

    afterAll(async () => {
        await AppDataSource.close();
    });

    it('should create and retrieve an order', async () => {
        // Create an Order
        const newOrder = orderRepo.create({
            total_product_value: 150.0,
            total_shipping_value: 20.0,
            client_name: 'John Doe',
            client_address: '123 Test Street'
        });
        await orderRepo.save(newOrder);

        // Retrieval of the order
        const savedOrder = await orderRepo.findOne({ where: { client_name: 'John Doe' } });

        expect(savedOrder).toBeDefined();
        expect(savedOrder!.client_name).toBe('John Doe');
    });
});
