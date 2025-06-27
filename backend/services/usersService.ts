import { User, UserProps } from '../models/User';

export const fetchAllUsers = async (): Promise<UserProps[]> => {
    const users = await User.find().lean();
    if (!users || users.length === 0) {
        throw new Error('No users found');
    }
    return users;
}

export const fetchUserById = async (id: string): Promise<UserProps> => {
    const user = await User.findById(id).lean();
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}