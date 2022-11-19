import express from "express";
import routes from "./routes/routes";
import cors from "cors";
import bodyParser from "body-parser";
import connectToMongoDb from "./connection/connection";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

connectToMongoDb();
