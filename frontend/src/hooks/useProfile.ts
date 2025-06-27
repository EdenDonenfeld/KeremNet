import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../services/FetchPosts';
import { API_URL } from '../consts/apiRoute';
import { ProfileData } from '../components/pages/profile/Profile';

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchData<ProfileData>(`${API_URL}/profile`)
  });
}