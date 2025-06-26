import { Request, Response } from 'express';

export const getUserProfile = (req: Request, res: Response) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(404).render('error', { error: "User not logged in", status: 404 });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).render('error', { error: error.message, status: 500 });
        } else {
            res.status(500).render('error', { error: 'An unknown error occurred', status: 500 });
        }
    }
}