import { users } from '../api/data';

export const fetchAllUsers = (): Object => {
    return users;
}

export const fetchUserById = (id: string): Object | Error => {
    const post = users.find(user => user.id === id);
    
    if (post) {
        return post;
    } else {
        throw new Error('Post not found');
    }
}