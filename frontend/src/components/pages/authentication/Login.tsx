import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = () => {
        console.log('Logging in user:', username);
    }

    return (
        <Box sx={{ padding: 1, maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Login Page
                </Typography>

                <TextField
                    fullWidth
                    label="Username"
                    variant="standard"
                    margin="normal"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="standard"
                    margin="normal"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => login()}
                    sx={{ mt: 2, borderRadius: '1rem' }}
                >
                    Login    
                </Button>
                <Link to="/register" style={{ marginTop: '1rem', textDecoration: 'none' }}>
                    <Typography variant="body2" color="primary">
                        Don't have an account? Register here
                    </Typography>
                </Link>
            </Stack>
        </Box>
    );
}

export default Login;