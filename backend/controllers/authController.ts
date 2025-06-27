import path from 'path';
import fs from 'fs';
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

  if (req.file) {
    const userImagesDir = path.join(__dirname, '../images/users');
    if (!fs.existsSync(userImagesDir)) {
      fs.mkdirSync(userImagesDir, { recursive: true });
    }

    const imagePath = path.join(userImagesDir, `${result.data.user?.id}.png`);
    fs.writeFileSync(imagePath, req.file.buffer);
  }

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
    req.session.user = result.data.user;
  }

  res.status(result.status).json(result.data);
};