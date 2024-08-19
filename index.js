import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { database } from "./dbConnection/connect.js";
import dataRouter from "./Routers/data.router.js";
dotenv.config()
let app = express();
app.use(cors());
app.use(express.json());

app.use("/data", dataRouter)
app.listen(process.env.port, ()=>{
    console.log("server created");
})

app.get("/", (req, res)=>{
    res.send("Hello !")
})
