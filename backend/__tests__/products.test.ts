import request from 'supertest';
import app from '../src/app'; // adjust the path as necessary
import { AppDataSource } from '../src/datasources/getDataSource';
import { initializeDatabase } from '../src/helpers/utils';

describe('GET /products', () => {

    beforeAll(async () => { 
        // Set up connection to the database
        await initializeDatabase();
    });

    afterAll(async () => {
        // Close connection to the database
        await AppDataSource.close();
    });
    it('should return a list of products', async () => {
        const response = await request(app).get('/products');
        
        expect(response.status).toBe(200);
        expect(response.body.products).toBeInstanceOf(Array);

        const product = response.body.products[0];
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('brand');
        expect(product).toHaveProperty('name');
        expect(product).toHaveProperty('price');
    });
});
