import "./setup";
import authRouter from "./routes/authRouter"
import express, { Router } from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";


const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);



export default app;

export async function init() {
  await connectDatabase();
}