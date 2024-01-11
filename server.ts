import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
// import { consumerToQueue } from "./src/services/consumer.service";
// import { QueueEvent } from "./src/utils/constant.queue";
import instanceDataBase from "./src/database/connect.database";
import connectDatabase from "./src/database/connect.database";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, async () => {
  await connectDatabase.connect();
  console.log(`Server Product is Active at http://localhost:${port}`);
});
