import express from 'express';
import mongoose from 'mongoose';
import router from './routes/mocks.router.js'
import usersRouter from './routes/users.router.js'
import dotenv from 'dotenv';
import adoptionRouter from './routes/adoption.router.js';
import { swaggerUi, specs } from '../swaggerConfig.js';

dotenv.config();
console.log('✅ ENV:', process.env.MONGODB_URI);
console.log('URI de Mongo:', process.env.MONGODB_URI)

const app = express();

app.use(express.json());
app.use('/api/mocks', router);
app.use('/api', usersRouter);
app.use('/api/adoptions', adoptionRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export async function initMongo() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB');
  } catch (err) {
    console.error('❌ Error al conectar a MongoDB:', err.message);
  }
}

export default app;