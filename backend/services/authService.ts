import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import { users, User } from '../api/data';

const SALT_ROUNDS = 10;

export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const newUser: User = {
            id: uuidv4(),
            username: username,
            password: hashedPassword,
            createdAt: new Date().toISOString(),
            postsIds: []
        }
        users.push(newUser);
        return res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id } });
    } catch (error) {
        return res.status(500).json({ message: 'Could not register user' });
    }
}

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    try {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        return res.status(200).json({ message: 'Login successful', user: { id: user.id } });
    } catch (error) {
        return res.status(500).json({ message: 'Could not log in' });
    }
}