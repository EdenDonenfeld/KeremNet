import axios from "axios";

export const fetchPosts = async () => {
    try {
        const response = await axios.get('http://localhost:5000/posts');
        if (response.status !== 200) {
            throw new Error('Failed to fetch posts');
        }
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}