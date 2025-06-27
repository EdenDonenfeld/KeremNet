import { Request, Response } from 'express';
import { fetchUserPosts } from '../services/profileService';

export const getUserProfile = (req: Request, res: Response) => {
    try {
        const user = req.session.user;
        res.status(200).json({
            id: user.id,
            username: user.username,
            createdAt: user.createdAt
        })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).render('error', { message: error.message, status: 500 });
        } else {
            res.status(500).render('error', { message: 'An unknown error occurred', status: 500 });
        }
    }
}

export const getUserPosts = (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const userPosts = fetchUserPosts(userId);
        console.log(`Fetched posts for user ID: ${userId}`, userPosts);
        res.status(200).json(userPosts);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).render('error', { message: error.message, status: 404 });
        } else {
            res.status(500).render('error', { message: 'An unknown error occurred', status: 500 });
        }
    }
}