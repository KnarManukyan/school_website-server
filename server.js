const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require('./routes/index.js')
require('dotenv').config();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

app.use('/api', router);
app.listen(process.env.SERVER_PORT, () => console.log('server is connected'));
