import { Post, PostProps} from '../models/Post';

export const fetchUserPosts = async (userId: string): Promise<PostProps[]> => {
    const userPosts = await Post.find({ userId }).exec();
    if (userPosts.length >= 0) {
        return userPosts;
    } else {
        throw new Error('No posts found for this user');
    }
}
