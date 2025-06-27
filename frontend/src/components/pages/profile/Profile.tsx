import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useProfile } from '../../../hooks/useProfile';
import { useProfilePosts } from '../../../hooks/useProfilePosts';
import Post from '../../post/Post';

interface ProfileData {
  id: string;
  username: string;
  createdAt: string;
}

const Profile: React.FC = () => {
  const {
    data: profileData,
    isLoading: profileLoading,
    isError: profileError,
  } = useProfile();

  const {
    data: postsData,
    isLoading: postsLoading,
    isError: postsError,
  } = useProfilePosts(profileData?.id || '', !!profileData?.id);

  if (profileLoading || postsLoading) {
    return <CircularProgress />;
  }

  if (profileError || postsError || !profileData) {
    return <Typography color="error">Error loading profile</Typography>;
  }

  const createdAt = new Date(profileData.createdAt);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const formattedDate = createdAt.toLocaleDateString('en-US', options);

  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Welcome, {profileData.username}!
      </Typography>
      <Typography variant="body1">
        Account created: {formattedDate}
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" color="primary">Your Posts:</Typography>
        {postsData?.length === 0 ? (
          <Typography>No posts found.</Typography>
        ) : (
          postsData?.map((post: any, idx: number) => (
            <Post
              id={post.id}
              username={post.username}
              text={post.text}
              date={post.data}
              likes={post.likes}
              comments={post.comments}
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default Profile;
export type { ProfileData };
