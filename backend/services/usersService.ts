import { users } from '../api/users.json';

export const fetchAllUsers = () => {
    return users;
}

export const fetchUserById = (id: string) => {
    const post = users.find(user => user.id === id);
    
    if (post) {
        return post;
    } else {
        throw new Error('Post not found');
    }
}

export const fetchUserPosts = (userId: string) => {
    const userPosts = users.filter(user => user.id === userId);

    if (userPosts.length > 0) {
        return userPosts;
    } else {
        throw new Error('No posts found for this user');
    }
}