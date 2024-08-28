import express from 'express';
import router from './routes/router';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', router);

export default app;