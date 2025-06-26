import express from 'express';
import { getAllUsers, getUserById } from '../controllers/usersController';
import { getPostsByUserId } from '../controllers/postsController';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.get('/:id/posts', getPostsByUserId); 

export default router;
