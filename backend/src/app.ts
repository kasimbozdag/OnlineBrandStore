import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// You'd also import other necessary middlewares or utilities as needed.

// Routes
import routes from './routes';

const app = express();

// Middleware Setup
app.use(cors());
app.use(bodyParser.json()); // If you're using Express 4.16+ you can use express.json() instead.
app.use(bodyParser.urlencoded({ extended: true })); // Parsing URL-encoded bodies.


// Routes
app.use('', routes);
// Add more route handlers as you build out your application.

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app ; // This export allows for the app instance to be used in test files.
