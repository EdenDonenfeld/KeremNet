import { Request, Response } from 'express';

export const getUserProfile = (req: Request, res: Response) => {
    try {
        const user = req.session.user;
        console.log('User profile request:', user);
        res.status(200).json({
            username: user.username,
            createdAt: user.createdAt
        })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).render('error', { error: error.message, status: 500 });
        } else {
            res.status(500).render('error', { error: 'An unknown error occurred', status: 500 });
        }
    }
}