import express from 'express';
import { getAllPosts, getPostById, getPostsByUserId, createPost } from '../controllers/postsController';
import { validatePost } from '../middleware/validation';

const router = express.Router();

router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostById);
router.get('/users/:id/posts', getPostsByUserId);
router.post('/posts', validatePost(), createPost);

export default router;
