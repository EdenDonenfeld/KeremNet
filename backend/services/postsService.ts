import { posts } from '../api/data';

export const fetchAllPosts = (): Object => {
    return posts;
}

export const fetchPostById = (id: string): Object | Error => {
    const post = posts.find(post => post.id === id);
    
    if (post) {
        return post;
    } else {
        throw new Error('Post not found');
    }
}

export const fetchAllUsersPosts = (userId: string): Object | Error => {
    const userPosts = posts.filter(post => post.id === userId);
    
    if (userPosts.length > 0) {
        return userPosts;
    } else {
        throw new Error('No posts found for this user');
    }
}