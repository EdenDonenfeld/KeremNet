import { users } from '../api/data';

export const fetchAllUsers = () => {
    if (users && users.length > 0) {
        return users;
    } else {
        throw new Error('No users found');
    }
}

export const fetchUserById = (id: string) => {
    const post = users.find(user => user.id === id);
    
    if (post) {
        return post;
    } else {
        throw new Error('Post not found');
    }
}