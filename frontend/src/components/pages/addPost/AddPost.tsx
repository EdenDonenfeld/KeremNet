import React, { useState } from 'react';
import { PostProps } from '../../post/Post';
import { Box, Typography, TextField, Button } from '@mui/material';

const AddPost: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const addNewPost = async () => {
    if (username !== '' && content !== '') {
      const postId = Math.floor(Math.random() * 1000000);
      const newPost: PostProps = {
        id: postId.toString(),
        username: username,
        text: content,
        date: new Date().toISOString(),
        likes: 0,
        comments: []
      };

      try {
        const response = await fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPost),
        });

        if (response.ok) {
          console.log('Post added successfully');
          setUsername('');
          setContent('');
        }
      } catch (error) {
        console.error('Error adding post:', error);
      }
    }
  }

  return (
    <Box sx={{ padding: 1, maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
            Add a New Post
        </Typography>
        <form>
            <TextField
              fullWidth
              label="Username"
              variant="standard"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              label="Post Content"
              variant="outlined"
              multiline
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
              onClick={() => addNewPost()}
            >
            Submit Post
            </Button>
        </form>
    </Box>
  );
}

export default AddPost;