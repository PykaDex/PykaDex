
import express from 'express';

import routes from "./app/routes/index.routes"

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
