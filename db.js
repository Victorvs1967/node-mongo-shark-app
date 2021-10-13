const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const {
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

mongoose.connect(url, { useNewUrlParser: true })
  .then(() => console.log('DB connection succsseful'))
  .catch(err => console.log(err));
