import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link, Stack } from '@mui/material';

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

                <Link href="/register" underline="always" sx={{ mt: 2 }}>
                    If you don't have an account, please Register.
                </Link>
            </Stack>
        </Box>
    );
}

export default Login;