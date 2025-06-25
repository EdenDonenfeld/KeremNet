import { Request, Response } from "express";
import { fetchAllUsers, fetchUserById } from "../services/usersService";

export const getAllUsers = (req: Request, res: Response) => {
    try {
        const posts = fetchAllUsers();
        res.status(200).json(posts);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}

export const getUserById = (req: Request, res: Response) => {
    const postId = req.params.id;
    try {
        const post = fetchUserById(postId);
        res.status(200).json(post);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}