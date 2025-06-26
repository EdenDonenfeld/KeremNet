import axios from "axios";

export const createPost = async <T>(API_URL: string, data: T): Promise<T> => {
    try {
        const response = await axios.post<T>(API_URL, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error: any) {
        const message = error?.response?.data?.message || 'Error creating post';
        throw new Error(message);
    }
};
