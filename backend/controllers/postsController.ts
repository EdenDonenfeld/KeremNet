import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import { fetchAllPosts, fetchPostById, fetchAllUsersPosts, uploadPost  } from "../services/postsService";

export const getAllPosts = (req: Request, res: Response) => {
    try {
        const posts = fetchAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).render('error', { message: error.message, status: 404 });
        } else {
            res.status(500).render('error', { message: 'An unknown error occurred', status: 500 });
        }
    }
}

export const getPostById = (req: Request, res: Response) => {
    const postId = req.params.id;
    try {
        const post = fetchPostById(postId);
        res.status(200).json(post);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).render('error', { message: error.message, status: 404 });
        } else {
            res.status(500).render('error', { message: 'An unknown error occurred', status: 500 });
        }
    }
}

export const createPost = (req: Request, res: Response): void => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const { text } = req.body;
        const newPost = {
            id: Math.floor(Math.random() * 1000000).toString(),
            username: req.session.user.username || 'Anonymous',
            userId: req.session.user.id || '0',
            text: text,
            date: new Date().toISOString(),
            likes: 0,
            comments: []
        }
        
        const createdPost = uploadPost(newPost);
        res.status(200).json(createdPost);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).render('error', { message: error.message, status: 400 });
        } else {
            res.status(500).render('error', { message: 'An unknown error occurred', status: 500 });
        }
    }
}