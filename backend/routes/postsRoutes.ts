import express from 'express';
import { getAllPosts, getPostById, createPost } from '../controllers/postsController';
import { validatePost } from '../middleware/validation';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', validatePost(), createPost);

export default router;
