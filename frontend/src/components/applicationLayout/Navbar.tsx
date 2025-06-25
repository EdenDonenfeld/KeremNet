import { Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ backgroundColor: '#ECC9EE', px: 2, py: 1 }}>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Button color="secondary" variant="text" component={Link} to="/">Home</Button>
        <Button color="secondary" variant="text" component={Link} to="/add-post">Add Post</Button>
      </Stack>
    </Box>
  );
}

export default Navbar;