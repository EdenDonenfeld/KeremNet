import { useMutation } from '@tanstack/react-query';
import { createPost } from '../services/CreatePost';
import { PostProps } from '../components/post/Post';
import { API_URL } from '../consts/apiRoute';

export const useCreatePost = (options?: {
  onError?: (error: any) => void;
  onSuccess?: () => void;
}) => {
  return useMutation({
    mutationFn: (newPost: Pick<PostProps, 'text'>) =>
      createPost(`${API_URL}/posts`, newPost),
    ...options,
  });
};
