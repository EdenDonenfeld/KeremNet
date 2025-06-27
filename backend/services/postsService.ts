import { Post, PostProps } from '../models/Post';

export const fetchAllPosts = async (): Promise<PostProps[]> => {
  const posts = await Post.find().sort({ date: -1 }).lean();
  if (posts && posts.length >= 0) {
    return posts;
  }
  throw new Error('No posts found');
};

export const fetchPostById = async (id: string): Promise<PostProps> => {
  const post = await Post.findById(id).lean();
  if (!post) {
    throw new Error('Post not found');
  }
  return post;
};

export const fetchAllUsersPosts = async (postIds: string[]): Promise<PostProps[]> => {
  const posts = await Post.find({ _id: { $in: postIds } }).lean();
  if (posts && posts.length >= 0) {
    return posts;
  }
  throw new Error('No posts found for this user');
};

export const uploadPost = async (newPostData: Pick<PostProps, 'username' | 'userId' | 'text'>): Promise<PostProps> => {
  const post = new Post({
    ...newPostData,
    date: new Date(),
    likes: 0,
    comments: []
  });

  const saved = await post.save();
  return saved.toObject();
};
