const express = require('express');
const translateRoute = require('./route');

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/api', translateRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
