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