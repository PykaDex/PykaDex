
import express from 'express';
import cors from "cors"
import routes from "./app/routes/index.routes"

const app = express();

app.use(cors({
  origin: "http://localhost:8080"
}))
app.use(express.json());
app.use(routes);


app.use("/pykadex/loading", express.static(__dirname + '/assets/loading/images'));
app.use("/pykadex/pokemon/assets", express.static(__dirname + '/assets/images'));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);  
