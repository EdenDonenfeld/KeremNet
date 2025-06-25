// backend/server.ts
import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

const buildPath = path.join(__dirname, '../frontend/build');

app.use(express.static(buildPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
