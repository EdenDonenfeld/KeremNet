import express from 'express';
import { getUserProfile, getUserPosts } from '../controllers/profileController';
const router = express.Router();

router.get('/', getUserProfile);
router.get('/:id/posts', getUserPosts);

export default router;
