import { toEmail } from '../../../config/env_variables';
import { smtpConfig } from '../../../config/smtp';
import nodemailer from 'nodemailer';
import { fromEmail } from '../../../config/env_variables';


export const sendMail = async (from: string, to: string, subject: string, html: string) => {

    const transporter = nodemailer.createTransport(smtpConfig);

    const info = await transporter.sendMail({
        from: from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: html, // html body
    });
    transporter.close;

    return info;
};

export const orderNotificationMailService = async (orderId: string) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 20px;
            }
            .content {
                margin-bottom: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>New Order Received</h2>
            </div>
            <div class="content">
                <p>Hi Admin,</p>
                <p>A new order has been created on YourShop.</p>
                <p><strong>Order ID:</strong> #${orderId}</p>
                <p>Thank you for your attention!</p>
            </div>
        </div>
    </body>
    </html>
    `;

    const subject = `New Order Received - #${orderId}`;
    await sendMail(fromEmail as string, toEmail as string, subject, htmlContent);
};
