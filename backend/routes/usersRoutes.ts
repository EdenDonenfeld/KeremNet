import express from 'express';
import { getAllUsers, getUserById } from '../controllers/usersController';
import { isAuthenticated } from '../middleware/authValidation';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

export default router;
