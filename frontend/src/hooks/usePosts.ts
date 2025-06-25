import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../services/FetchPosts';
import { PostProps } from '../components/post/Post';

const API_URL = 'http://localhost:3000/posts';

export const usePosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => fetchData<PostProps[]>(API_URL)
    });
}