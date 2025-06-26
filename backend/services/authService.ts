import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import { users, User } from '../api/data';

const SALT_ROUNDS = 10;

export const register = async (username: string, password: string): Promise<{ status: number, data: any }> => {
    const existUser = users.find(user => user.username === username);
    if (existUser) {
        return { status: 400, data: { message: 'Username already exists' } };
    }

    if (!username || !password) {
        return { status: 400, data: { message: 'Both username and password are required' } };
    }

    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const newUser: User = {
            id: uuidv4(),
            username,
            password: hashedPassword,
            createdAt: new Date().toISOString(),
            postsIds: []
        };
        users.push(newUser);
        return { status: 200, data: { message: 'User registered successfully', user: { id: newUser.id } } };
    } catch (error) {
        return { status: 500, data: { message: 'Could not register user' } };
    }
};

export const login = async (username: string, password: string): Promise<{ status: number, data: any }> => {
    const user = users.find(user => user.username === username);
    if (!user) {
        return { status: 400, data: { message: 'Invalid username or password' } };
    }

    try {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return { status: 400, data: { message: 'Invalid username or password' } };
        }
        return { status: 200, data: { message: 'Login successful', user: { id: user.id } } };
    } catch (error) {
        return { status: 500, data: { message: 'Could not log in' } };
    }
};
