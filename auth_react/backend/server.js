const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('./connection');
const userRoutes = require('./userRoutes');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/users', userRoutes);

app.listen(4000, () => {
  console.log('Server is up and running');
});
