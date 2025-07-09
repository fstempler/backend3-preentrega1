import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import { createHash } from '../utils/passwordEncrypt.js';

export const generateUsers = async (count = 50) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push({
            _id: new mongoose.Types.ObjectId(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: createHash('coder123'),
            role: faker.helpers.arrayElement(['user', 'admin']),
            pets: [],
        });
    }
    return users;
};