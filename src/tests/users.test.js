import request from 'supertest';
import mongoose from 'mongoose';
import app, { initMongo } from '../app.js';

beforeAll(async () => {
    await initMongo();
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Users API', () => {
    it('POST /api/users → should create a new user', async () => {
        const newUser = {
            first_name: 'Miles',
            last_name: 'Davis',
            email: `miles${Date.now()}@test.com.`,
        };

        const res = await request(app)
            .post('/api/users')
            .send(newUser);
        
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.first_name).toBe(newUser.first_name);
        expect(res.body.last_name).toBe(newUser.last_name);
        expect(res.body.email).toBe(newUser.email);
    });

    it('GET /api/users → should return an array of users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.users)).toBe(true);
    });
});