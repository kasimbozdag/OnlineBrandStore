// notification.test.ts
import request from 'supertest';
import app from '../src/app'; // your Express app
import nodemailer from 'nodemailer';
import { AppDataSource } from '../src/datasources/getDataSource';
import { initializeDatabase } from '../src/helpers/utils';

// Mock the Nodemailer sendMail function
jest.mock('nodemailer');

const mockedNodemailer = nodemailer as jest.Mocked<typeof nodemailer>;

describe('Order Notifications', () => {

    beforeAll(async () => {
        await initializeDatabase();
    });

    afterAll(async () => {
        await AppDataSource.close();
    });

    it('sends an email to admin after order creation', async () => {
        // Mock a successful email send
        mockedNodemailer.createTransport.mockReturnValue({
            sendMail: jest.fn().mockResolvedValue(true),
        } as any);

        // Simulate order creation (assuming you've already tested this endpoint)
        const response = await request(app).post('/checkout').send({
            clientName: 'John Doe',
            clientAddress: '123 Street, City, Country',
            shippingOption: 'express',
            cart: [{id:1}]// Again, checking out a product with ID 1.
        });

        // Check if the endpoint responded successfully
        expect(response.status).toBe(200);

        // Check if the email sending function was called
        expect(mockedNodemailer.createTransport().sendMail).toHaveBeenCalled();
    });
});
