import { posts, Post } from '../api/data';

export const fetchUserPosts = (userId: string): Post[] => {
    const userPosts = posts.filter(post => post.userId === userId);
    console.log(`Fetching posts for user ID: ${userId}`, userPosts);
    
    if (userPosts.length > 0) {
        return userPosts;
    } else {
        throw new Error('No posts found for this user');
    }
};



