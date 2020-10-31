import express from 'express';
const app = express();
import data from './products.js';
import path from 'path';

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
