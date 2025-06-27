import axios from "axios";

export const fetchData = async <T>(API_URL: string): Promise<T> => {
    try {
        const response = await axios.get<T>(API_URL);
        console.log(API_URL)
        console.log('Response data:', response.data);
        return response.data;
    } catch (error: any) {
        const message = error?.response?.data?.message || 'Error fetching data';
        throw new Error(message);
    }
};
