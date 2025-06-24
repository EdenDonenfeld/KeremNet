import { Box, Button, Stack } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ backgroundColor: '#ECC9EE', px: 2, py: 1 }}>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Button color="secondary" variant="text">Home</Button>
        <Button color="secondary" variant="text">Explore</Button>
        <Button color="secondary" variant="text">Profile</Button>
      </Stack>
    </Box>
  );
}

export default Navbar;