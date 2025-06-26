import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import { fetchAllPosts, fetchPostById, fetchAllUsersPosts, uploadPost  } from "../services/postsService";
import { fetchUserPostIds } from "../services/usersService";

export const getAllPosts = (req: Request, res: Response) => {
    try {
        const posts = fetchAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).render('error', { error: error.message, status: 404 });
        } else {
            res.status(500).render('error', { error: 'An unknown error occurred', status: 500 });
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
            res.status(404).render('error', { error: error.message, status: 404 });
        } else {
            res.status(500).render('error', { error: 'An unknown error occurred', status: 500 });
        }
    }
}

export const getPostsByUserId = (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
        const postIds = fetchUserPostIds(userId);
        const posts = fetchAllUsersPosts(postIds);
        res.status(200).json(posts);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).render('error', { error: error.message, status: 404 });
        } else {
            res.status(500).render('error', { error: 'An unknown error occurred', status: 500 });
        }
    }
}

export const createPost = (req: Request, res: Response): void => {
    try {
        const newPost = req.body;
        newPost.id = Math.floor(Math.random() * 1000000).toString();
        newPost.date = new Date().toISOString();
        newPost.likes = 0;
        newPost.comments = [];

        const errors = validationResult(newPost);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        
        const createdPost = uploadPost(newPost);

        res.status(200).json(createdPost);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).render('error', { error: error.message, status: 400 });
        } else {
            res.status(500).render('error', { error: 'An unknown error occurred', status: 500 });
        }
    }
}