import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { fetchAllPosts, fetchPostById, uploadPost } from '../services/postsService';

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await fetchAllPosts();
    res.status(200).json(posts);
  } catch (error) {
      if (error instanceof Error) {
          res.status(404).render('error', { message: error.message, status: 404 });
      } else {
          res.status(500).render('error', { message: 'An unknown error occurred', status: 500 });
      }
    }
}

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await fetchPostById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
        if (error instanceof Error) {
            res.status(404).render('error', { message: error.message, status: 404 });
        } else {
            res.status(500).render('error', { message: 'An unknown error occurred', status: 500 });
        }
    }
}

export const createPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { text } = req.body;

    const newPost = {
      username: req.session.user.username,
      userId: req.session.user.id,
      text: text,
    }

    const createdPost = await uploadPost(newPost);
    res.status(200).json(createdPost);
  } catch (error) {
      if (error instanceof Error) {
          res.status(400).render('error', { message: error.message, status: 400 });
      } else {
          res.status(500).render('error', { message: 'An unknown error occurred', status: 500 });
      }
  }
}