const express = require('express');
const dotenv = require('dotenv');

const db = require('./db');
const sharks = require('./routes/sharks');

dotenv.config();

const path = __dirname + '/views/';
const { SERVER_PORT } = process.env;
const port = SERVER_PORT;

const app = express();
const router = express.Router();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());
app.use(express.static(path));
app.use('/sharks', sharks);

app.listen(port, () => console.log(`App listrning on port ${port}`));