import axios from "axios";

export const fetchData = async <T>(API_URL: string): Promise<T[]> => {
    const response = await axios.get<T[]>(API_URL);
    if (response.status !== 200) {
        throw new Error(`Error fetching posts: ${response.statusText}`);
    }
    return response.data;
}