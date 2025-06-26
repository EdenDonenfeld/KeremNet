import { useMutation } from '@tanstack/react-query';
import { createPost } from '../services/CreatePost';
import { PostProps } from '../components/post/Post';

const API_URL = 'http://localhost:3000/posts';

export const useCreatePost = () => {
  return useMutation({
    mutationFn: (newPost: Pick<PostProps, 'username' | 'text'>) => createPost<Pick<PostProps, 'username' | 'text'>>(API_URL, newPost)
  });
};
