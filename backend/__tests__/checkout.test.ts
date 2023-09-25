import request from 'supertest';
import app  from '../src/app'; 
import { AppDataSource } from '../src/datasources/getDataSource';
import nodemailer from 'nodemailer';
import { initializeDatabase } from '../src/helpers/utils';

// Mock the Nodemailer sendMail function
jest.mock('nodemailer');

const mockedNodemailer = nodemailer as jest.Mocked<typeof nodemailer>;

describe('Checkout Flow', () => {
    
    beforeAll(async () => {
        await initializeDatabase();
    });

    afterAll(async () => {
        await AppDataSource.close();
    });

    it('should successfully submit form data', async () => {
         // Mock a successful email send
         mockedNodemailer.createTransport.mockReturnValue({
            sendMail: jest.fn().mockResolvedValue(true),
        } as any);

        const response = await request(app)
            .post('/checkout')
            .send({
                clientName: 'John Doe',
                clientAddress: '123 Street, City, Country',
                shippingOption: 'standard',
                cart: [{id:1}] // Assuming you're checking out a product with ID 1.
            });
            
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
    });

    it('should create an order', async () => {
         // Mock a successful email send
         mockedNodemailer.createTransport.mockReturnValue({
            sendMail: jest.fn().mockResolvedValue(true),
        } as any);

        const response = await request(app)
            .post('/checkout')
            .send({
                clientName: 'John Doe',
                clientAddress: '123 Street, City, Country',
                shippingOption: 'express',
                cart: [{id:1}]// Again, checking out a product with ID 1.
            });

        const orderId = response.body.orderId;
        const order = await request(app).get(`/order/${orderId}`);
        
        expect(order.body.order.id).toBe(orderId);
        expect(order.body.order.clientName).toBe('John Doe');
    });
});

