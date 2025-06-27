import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../services/FetchPosts';
import { API_URL } from '../consts/apiRoute';
import { PostProps } from '../components/post/Post';

export const useProfilePosts = (userId: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['profile_posts'],
    queryFn: () => fetchData<PostProps[]>(`${API_URL}/profile/${userId}/posts`),
    enabled
  });
}