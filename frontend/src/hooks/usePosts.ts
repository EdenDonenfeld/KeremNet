import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../services/FetchPosts';
import { PostProps } from '../components/post/Post';
import { API_URL } from '../consts/apiRoute';

export const usePosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => fetchData<PostProps[]>(`${API_URL}/posts`)
    });
}