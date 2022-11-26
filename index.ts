const confExpress = require('./config/express')
const http = require('http');
const express = require('express');
const route = require('./utils/routes');

const app = express();
route(app);
configExpress(app)

const server = http.Server(app);

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send("Movie API")
})

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
