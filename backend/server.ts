import express from 'express';
import path from 'path';
import session from 'express-session';
import postRoutes from './routes/postsRoutes';
import userRoutes from './routes/usersRoutes';
import authRoutes from './routes/authRoutes';
import { isAuthenticated } from './middleware/authValidation';

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const buildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(buildPath));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());

app.use(session({
  secret: 'zoey',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use('/', authRoutes);

app.use('/posts', isAuthenticated, postRoutes);
app.use('/users', isAuthenticated, userRoutes);

app.get('/profile', isAuthenticated, (req, res) => {
  res.render('profile', { user: req.session.user });
});

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
