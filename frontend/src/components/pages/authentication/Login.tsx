import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AuthenticationForm from './AuthenticationForm';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');

    const login = () => {
        console.log('Logging in user:', username);
    }

    return (
        <Box sx={{ padding: 1, maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <AuthenticationForm
                    handleClick={login}
                    buttonText="Login"
                    feedback={feedback}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />
                <Link to="/register" style={{ marginTop: '1rem', textDecoration: 'none' }}>
                    <Typography variant="body2" color="textSecondary">
                        Don't have an account? Register here.
                    </Typography>
                </Link>
            </Stack>
        </Box>
    );
}

export default Login;