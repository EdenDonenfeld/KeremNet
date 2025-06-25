import { posts } from '../api/posts.json';

export const fetchAllPosts = () => {
    return posts;
}

export const fetchPostById = (id: string) => {
    const post = posts.find(post => post.id === id);
    
    if (post) {
        return post;
    } else {
        throw new Error('Post not found');
    }
}