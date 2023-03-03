const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const postRoutes = require('./routes/post');

// DB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected!'));

mongoose.connection.on('error', (err) => {
  console.log(`Database connection error: ${err.message}`);
});

// Read from file
const fileName = './lorem.txt';
const errorHandler = (err) => console.log(err);
const dataHandler = (data) => console.log(data.toString());
fs.readFileSync(fileName, (err, data) => {
  if (err) errorHandler(err);
  dataHandler(data);
});

// Custom Middleware
const customMiddleware = (req, res, next) => {
  console.log('Middleware😂');
  next();
};

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json()); //Must come before ROUTE MIDDLEWARE
app.use('/', customMiddleware, postRoutes);

console.log("I'm learning NodeJS");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Node server running on PORT:${PORT}`));
