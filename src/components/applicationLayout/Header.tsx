import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#FDE5EC' }}>
      <Toolbar>
        <Box component="img" src="/kerem-net-logo.png" alt="logo" sx={{ height: 40, mr: 2 }} />
        <Typography variant="h5" color="#ff69b4" fontWeight="bold">KeremNet</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;