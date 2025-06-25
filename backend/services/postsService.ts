import { posts } from '../api/data';

export const fetchAllPosts = () => {
    if (posts && posts.length > 0) {
        return posts;
    } else {
        throw new Error('No posts found');
    }
}

export const fetchPostById = (id: string) => {
    const post = posts.find(post => post.id === id);
    
    if (post) {
        return post;
    } else {
        throw new Error('Post not found');
    }
}

export const fetchAllUsersPosts = (postIds: string[]) => {
    const userPosts = posts.filter(post => postIds.includes(post.id));

    if (userPosts.length > 0) {
        return userPosts;
    } else {
        throw new Error('No posts found for this user');
    }
}