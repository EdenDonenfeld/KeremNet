import React, { useState } from 'react';
import axios from 'axios';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { API_URL } from '../../../consts/apiRoute';
import AuthenticationForm from './AuthenticationForm';

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');

    const register = async () => {
        try {
            const response = axios.post(`${API_URL}/register`, {
                username,
                password
            });

            const data = await response;
            if (data.status === 200) {
                setUsername('');
                setPassword('');
                setFeedback(data.data.message || 'User registered successfully');
            }
        } catch (error: any) {
            const errorResponse = error.response;
            if (errorResponse?.data?.errors) {
                const errorMessage = errorResponse.data.errors[0].msg || 'Username or paword is invalid';
                setFeedback(errorMessage);
            } else {
                setFeedback(errorResponse?.data?.message || 'Error registering user');
            }
        }
    }

    return (
        <Box sx={{ padding: 1, maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Register Page
                </Typography>
                <AuthenticationForm
                    handleClick={register}
                    buttonText="Register"
                    feedback={feedback}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />
                <Link to="/login" style={{ marginTop: '1rem', textDecoration: 'none' }}>
                    <Typography variant="body2" color="primary">
                        If you already have an account, please Login.
                    </Typography>
                </Link>
            </Stack>
        </Box>
    );
}

export default Register;