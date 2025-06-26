import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../consts/apiRoute';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AuthenticationForm from './AuthenticationForm';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');

    const login = async () => {
        try {
            const reponse = axios.post(`${API_URL}/login`, {
                username,
                password
            });

            const data = await reponse;
            if (data.status === 200) {
                setUsername('');
                setPassword('');
                setFeedback(data.data.message || 'Login successful');
            }
        } catch (error: any) {
            const errorResponse = error.response;
            if (errorResponse?.data?.errors) {
                const errorMessage = errorResponse.data.errors[0].msg || 'Username or password is invalid';
                setFeedback(errorMessage);
            } else {
                setFeedback(errorResponse?.data?.message || 'Error logging in');
            }
        }
    }

    return (
        <Box sx={{ padding: 1, maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Login Page
                </Typography>
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
                    <Typography variant="body2" color="primary">
                        Don't have an account? Register here.
                    </Typography>
                </Link>
            </Stack>
        </Box>
    );
}

export default Login;