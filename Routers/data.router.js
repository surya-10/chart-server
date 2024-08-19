import express from "express";
import { addData, deleteData, editData, getdata } from "../controllers/data.controller.js";

let dataRouter = express.Router();

dataRouter.post("/create-data", addData);
dataRouter.get("/get-all", getdata);
dataRouter.delete("/delete/:id", deleteData)
dataRouter.put("/update/:id", editData);

export default dataRouter;