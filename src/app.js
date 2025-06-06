import express from 'express';
import mongoose from 'mongoose';
import router from './routes/mocks.router.js'
import dotenv from 'dotenv';

dotenv.config();

console.log('URI de Mongo:', process.env.MONGODB_URI)

const app = express();

await mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log('✅ Conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Error al conectar a MongoDB:', err.message);
});

app.use(express.json());

app.use('/api/mocks', router);

app.listen(3000, () => console.log('Server running on port 3000'))