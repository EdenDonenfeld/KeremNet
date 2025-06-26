import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { register, login } from '../services/authService';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;
  const result = await register(username, password);
  res.status(result.status).json(result.data);
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;
  const result = await login(username, password);

  if (result.status === 200) {
    req.session.user = result.data.user.id;
  }

  res.status(result.status).json(result.data);
};