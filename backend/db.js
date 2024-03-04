const mongoose = require('mongoose');
// const users = require( './users' );

mongoose.connect('mongodb://127.0.0.1:27017/Sveltos')
.then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

