import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import categoryRouter from "./routes/category.routes";
import questionRouter from "./routes/question.routes";

const app = express();
const port: number = 3000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/question", questionRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
