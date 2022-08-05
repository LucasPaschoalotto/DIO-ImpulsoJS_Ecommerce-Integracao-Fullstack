import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import "./database";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use(router);

app.listen(5000, () => {
    console.log("Server on port 5000\nhttp://localhost:5000");
});
