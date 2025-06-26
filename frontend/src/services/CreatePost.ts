import axios from "axios";

export const createPost = async <T>(API_URL: string, data: T): Promise<T> => {
    const response = await axios.post<T>(API_URL, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.status !== 201) {
        throw new Error(`Error uploading post: ${response.statusText}`);
    }
    return response.data;
}