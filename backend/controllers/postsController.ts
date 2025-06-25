import { Request, Response } from "express";
import { fetchAllPosts, fetchPostById  } from "../services/postsService";

export const getAllPosts = (req: Request, res: Response) => {
    try {
        const posts = fetchAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}

export const getPostById = (req: Request, res: Response) => {
    const postId = req.params.id;
    try {
        const post = fetchPostById(postId);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ error: 'Post not found' });
    }
}