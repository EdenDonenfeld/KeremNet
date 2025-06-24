import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

const ApplicationLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Navbar />
      <Box sx={{ backgroundColor: '#fff8e1', p: 3 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default ApplicationLayout;