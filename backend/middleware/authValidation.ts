import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(400).json({ message: 'You must be logged in to access the website' });
  }
};
