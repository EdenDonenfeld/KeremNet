import { Request, Response } from "express";
import { fetchAllUsers, fetchUserById, fetchUserPosts } from "../services/usersService";

export const getAllUsers = (req: Request, res: Response) => {
    try {
        const posts = fetchAllUsers();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}

export const getUserById = (req: Request, res: Response) => {
    const postId = req.params.id;
    try {
        const post = fetchUserById(postId);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ error: 'Post not found' });
    }
}

export const getUsersPosts = (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        const posts = fetchUserPosts(userId);
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ error: 'No posts found for this user' });
    }
}