import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./connectDB.js";
import authRouter from "./router/auth/auth.js";
import foodCategoryRouter from "./router/foodCategory/foodCategory.js";
const app = express();
const PORT = 9999;
app.use(express.json());
connectDB();

app.use("/auth", authRouter);
app.use("/foodCategory", foodCategoryRouter);
app.listen(PORT, () => {
  console.log(`Hello world from server ${PORT}`);
});
