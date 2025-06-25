import express from 'express';
import path from 'path';
import { posts } from './api/posts.json';
import { users } from './api/users.json';

const app = express();
const PORT = 3000;

const buildPath = path.join(__dirname, '../frontend/build');

app.use(express.static(buildPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(p => p.id === postId);
    
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);
    
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});


app.get('/users/:id/posts', (req, res) => {
    const userId = req.params.id;
    const userPosts = posts.filter(post => post.id === userId);

    if (userPosts.length > 0) {
        res.json(userPosts);
    } else {
        res.status(404).json({ error: 'No posts found for this user' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
