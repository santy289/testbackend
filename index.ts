const express = require('express');

const app = express();

app.get('/');

const port = process.env.PORT || 8080;

app.listen(port);