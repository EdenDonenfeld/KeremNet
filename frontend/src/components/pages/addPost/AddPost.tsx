import React, { useState } from 'react';
import { useCreatePost } from '../../../hooks/useCreatePost';
import { Box, Typography, TextField, Button } from '@mui/material';
import { PostProps } from '../../post/Post';

const AddPost: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);

    const { mutate } = useCreatePost({
        onError: (error: any) => {
            setErrorMessage(error.message);
            setHasError(true);
        },
        onSuccess: () => {
            setErrorMessage(null);
            setHasError(false);
        }
    });

    const createPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newPost: Pick<PostProps, 'username' | 'text'> = {
            username,
            text: content,
        };
        mutate(newPost);
    };

    if (hasError && errorMessage) {
        return (
            <Box sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6" color="error">
                    {errorMessage}
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ padding: 1, maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
                Add a New Post
            </Typography>
            <form onSubmit={createPost}>
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
                    label="Post Content"
                    variant="outlined"
                    multiline
                    required
                    rows={4}
                    margin="normal"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button 
                    sx={{ marginTop: 2, borderRadius: '1rem' }}
                    variant="contained"
                    color="secondary" 
                    type="submit"
                >
                    Submit Post
                </Button>
            </form>
        </Box>
    );
}

export default AddPost;