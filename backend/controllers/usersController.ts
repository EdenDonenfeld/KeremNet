import { Request, Response } from "express";
import { fetchAllUsers, fetchUserById } from "../services/usersService";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await fetchAllUsers();
        res.status(200).json(users);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).render('error', { message: error.message, status: 404 });
        } else {
            res.status(500).render('error', { message: 'An unknown error occurred', status: 500 });
        }
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        const user = await fetchUserById(userId);
        res.status(200).json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).render('error', { message: error.message, status: 404 });
        } else {
            res.status(500).render('error', { message: 'An unknown error occurred', status: 500 });
        }
    }
}