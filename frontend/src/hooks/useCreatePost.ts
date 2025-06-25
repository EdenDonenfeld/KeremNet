import { useMutation } from '@tanstack/react-query';
import { createPost } from '../services/CreatePost';
import { PostProps } from '../components/post/Post';

const API_URL = 'http://localhost:3000/posts';

export const useCreatePost = () => {
  return useMutation({
    mutationFn: (newPost: PostProps) => createPost<PostProps>(API_URL, newPost)
  });
};
