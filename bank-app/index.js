const express = require('express');
const app = express();
const database = require('./util/database')

database.openConnection();

app.listen(8080, () => console.log('Server running'));