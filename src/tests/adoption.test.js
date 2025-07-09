import request from "supertest";
import mongoose from "mongoose";
import app, { initMongo } from '../app.js';

beforeAll(async () => {
    await initMongo();
});

afterAll(async () => {
    await mongoose.connection.close();
})

describe('Adoption API', () => {
    let createId;

    it('POST /api/adoptions → should create an adoption', async () => {
        const adoptionData = {
            user: 'Juan Perez',
            pet: 'Michi',
            date: '2023-06-01',
        }; 
        const res = await request(app)
            .post('/api/adoptions')
            .send(adoptionData);
        
            expect(res.status).toBe(201);
            expect(res.body._id).toBeDefined();
            createId = res.body._id;
    });

    it('GET /api/adoptions/:id → should return all adoptions',async () => {
        const res = await request(app).get('/api/adoptions');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('GET /api/adoptions/:id → should return specific adoption', async () => {
        console.log('🧪 ID usado:', createId); // ✅ DEBUG
        const res = await request(app).get(`/api/adoptions/${createId}`);
        expect(res.status).toBe(200);
        expect(res.body._id).toBe(createId);
    });

    it('GET /api/adoptions/:id → 404 if not found', async () => {
        const fakeId = new mongoose.Types.ObjectId();
        const res = await request(app).get(`/api/adoptions/${fakeId}`);
        expect(res.status).toBe(404);
    });
});