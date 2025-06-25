import express from 'express';
import path from 'path';
import { getAllPosts, getPostById, getPostsByUserId, createPost } from './controllers/postsController';
import { getAllUsers, getUserById } from './controllers/usersController';

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const buildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(buildPath));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.get('/posts', (req, res) => {
    getAllPosts(req, res);
});

app.get('/posts/:id', (req, res) => {
    getPostById(req, res);
});

app.get('/users', (req, res) => {
    getAllUsers(req, res);
});

app.get('/users/:id', (req, res) => {
    getUserById(req, res);
});

app.get('/users/:id/posts', (req, res) => {
    getPostsByUserId(req, res);
});

app.post('/posts', express.json(), (req, res) => {
    createPost(req, res);
});

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
