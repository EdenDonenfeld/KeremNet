import { Box, Typography, TextField, Button } from '@mui/material';

const AddPost = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
            Add a New Post
        </Typography>
        <form>
            <TextField
            fullWidth
            label="Username"
            variant="standard"
            margin="normal"
            />
            <TextField
            fullWidth
            label="Post Content"
            variant="outlined"
            multiline
            rows={4}
            margin="normal"
            />
            <Button sx={{ marginTop: 2 }}variant="contained" color="secondary" type="submit">
            Submit Post
            </Button>
        </form>
    </Box>
  );
}

export default AddPost;