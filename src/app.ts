import express from 'express';
import userRoutes from './routes/userRoutes';


const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/marvel', userRoutes);

export default app;