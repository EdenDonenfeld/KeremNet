import { useQuery } from '@tanstack/react-query';
import { uploadPost } from '../services/UploadPost';
import { PostProps } from '../components/post/Post';

const API_URL = 'http://localhost:3000/posts';

export const usePosts = (data: PostProps) => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => uploadPost<PostProps>(API_URL, data),
    });
}