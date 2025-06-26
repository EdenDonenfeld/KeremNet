import React from 'react'
import { Box, Typography, CircularProgress } from '@mui/material';
import { useProfile } from '../../../hooks/useProfile';

const Profile: React.FC = () => {
  const { data, isLoading, isError } = useProfile();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography color="error">Error loading profile</Typography>;
  }

  const createdAt = new Date(data.createdAt);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  data.createdAt = createdAt.toLocaleDateString('en-US', options);

  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h4" color='primary' sx={{ fontWeight: 'bold', mb: 2 }}>
        Welcome, {data.username} !
      </Typography>
      <Typography variant="body1" color='primary'>
        Account created: {data.createdAt}
      </Typography>
    </Box>
  );
}

export default Profile;