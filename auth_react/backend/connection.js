const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.REACT_APP_DATABASE_ACCESS, () =>
  console.log('Database is Connected')
);
