import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from '../consts/apiRoute';

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/profile`, {
        withCredentials: true,
      });
    return response.data;
    }
  });
}