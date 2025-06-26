import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../services/FetchPosts';
import { PostProps } from '../components/post/Post';
import { API_URL } from '../consts/apiRoute';

export const usePostById = (id: string | undefined) => {
    return useQuery({
        queryKey: ['posts', id],
        queryFn: () => fetchData<PostProps>(`${API_URL}/posts/${id}`)
    });
};
