import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#CAEDFF', p: 2, textAlign: 'center' }}>
      <Typography variant="body2" color="primary">
        © 2025 KeremNet
      </Typography>
    </Box>
  );
}

export default Footer;