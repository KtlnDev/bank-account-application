const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();

const database = require('./util/database');
const authenticationRoute = require('./routes/authentication');

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use('/user', authenticationRoute);

database.openConnection();

app.listen(8080, () => console.log('Server running'));