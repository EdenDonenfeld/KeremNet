import express from 'express';
import { getAllUsers, getUserById } from '../controllers/usersController';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

export default router;
