const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Express server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});