// backend/server.ts
import express from 'express';
import path from 'path';

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome to the backend server!");   
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
