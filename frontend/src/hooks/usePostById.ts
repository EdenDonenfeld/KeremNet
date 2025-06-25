import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../services/FetchPosts';
import { PostProps } from '../components/post/Post';

const API_URL = 'http://localhost:3000/posts';

export const usePostById = (id: string | undefined) => {
    return useQuery({
        queryKey: ['posts', id],
        queryFn: () => fetchData<PostProps>(`${API_URL}/${id}`)
    });
};
