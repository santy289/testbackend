
import { configExpress } from './src/config/configExpress';
import { routes } from './src/utils/routes';
const http = require('http');
const express = require('express');

const app = express();
routes(app);
configExpress(app)

const server = http.Server(app);

const port = process.env.PORT || 8080;

app.get('/', (req: any, res: any) => {
  res.send("Movie API")
})

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
