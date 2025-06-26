import express from 'express';
import path from 'path';
import postRoutes from './routes/postsRoutes';
import userRoutes from './routes/usersRoutes';

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const buildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(buildPath));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());

app.use('/', postRoutes);
app.use('/', userRoutes);

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
