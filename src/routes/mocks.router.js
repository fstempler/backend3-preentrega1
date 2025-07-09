import { Router } from "express";
import { generateUsers } from "../mocking/userMockGenerator.js";
import userModel from '../models/User.model.js';
import PetModel from '../models/Pet.model.js';
import { faker } from '@faker-js/faker';

const router = Router();

router.get('/mockingpets', (req, res) => {
    const pets = [];
    for (let i = 0; i < 100; i++){
        pets.push({
            name: faker.animal.cat(),
            species: faker.animal.type(),
            age: faker.number.int({ min: 1, max: 15 }),
        })
    }
    res.json({ status: 'success', pets });
});

router.get('/mockingusers', async (req, res) => {
    const users = await generateUsers(50);
    res.json({ status: 'success', users });
});

router.post('/generateData', async (req, res) => {
    const { users = 0, pets = 0 } = req.body; 

    try {
        const fakeUsers = await generateUsers(users);
        await userModel.insertMany(fakeUsers); 
        
        const fakePets = Array.from({ length: pets }).map(() => ({
            name: faker.animal.dog(),
            species: faker.animal.type(),
            age: faker.number.int({ min: 1, max: 15 }),
        }));
        await PetModel.insertMany(fakePets);

        res.json({ status: 'success', message: 'Data generated OK'});
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
});

router.get('/users', async (req, res) => {
    const users = await userModel.find();
    
    res.json(users);
});

router.get('/pets', async (req, res) => {
    const pets = await PetModel.find();
    res.json(pets);
})

export default router;