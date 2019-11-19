const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const config = require('config');
const path = require('path');



// Bodyparser Middleware
app.use(express.json());

// DB Config
// const db = config.get('mongoURI');

// const path = require("path");

// Connect to Mongo
mongoose
  .connect(process.env.MongoDBURI || "mongodb://drinks12:drinks123@ds337418.mlab.com:37418/heroku_q1jmrgbl",  { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  // Use Routes
app.use('/api/drinks', require('./routes/api/drinks'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));