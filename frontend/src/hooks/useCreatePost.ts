import { useMutation } from '@tanstack/react-query';
import { createPost } from '../services/CreatePost';
import { PostProps } from '../components/post/Post';

const API_URL = 'http://localhost:3000/posts';

export const useCreatePost = (options?: {
  onError?: (error: any) => void;
  onSuccess?: () => void;
}) => {
  return useMutation({
    mutationFn: (newPost: Pick<PostProps, 'text'>) =>
      createPost(API_URL, newPost),
    ...options,
  });
};
