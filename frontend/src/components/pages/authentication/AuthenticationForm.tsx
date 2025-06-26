import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

interface Props {
    handleClick: () => void;
    buttonText: string;
    feedback: string;
    username: string;
    setUsername: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
}

const AuthenticationForm: React.FC<Props> = ({ 
    handleClick, 
    buttonText, 
    feedback, 
    username, 
    setUsername, 
    password, 
    setPassword 
}) => {
    return (
        <>
            <Typography variant="h5" component="h1" gutterBottom>
                Register Page
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
                onClick={handleClick}
                sx={{ mt: 2, borderRadius: '1rem' }}
            >
                {buttonText}  
            </Button>

            <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                {feedback}
            </Typography>
        </>
    );
}

export default AuthenticationForm;