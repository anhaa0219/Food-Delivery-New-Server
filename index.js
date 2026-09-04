import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./connectDB.js";
import { User } from "./schemas/user-schema.js";
import { FoodCategory } from "./schemas/food-schema.js";
const app = express();
const PORT = 9999;
app.use(express.json());

connectDB();

app.use(express.json());

app.post("/signup", async (request, response) => {
  try {
    const { email, password, location, name } = request.body;
    const user = await User.create({ email, password, location, name });
    response.json({
      message1: "user created ",
      user: user,
      message2: "user created successfully ",
    });
    response.status(201).json({ message: "User Created", error: err });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
});
app.post("/food/category", async (request, response) => {
  try {
    const { categoryName, createdAt, updatedAt } = request.body;
    const category = await FoodCategory.create({
      categoryName,
      createdAt,
      updatedAt,
    });
    response.json({
      message: "Food category added successfully",
      category: "category",
    });
    response
      .status(201)
      .json({ message: "Category Created", category: "category" });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
});
app.listen(PORT, () => {
  console.log(`Hello world from server ${PORT}`);
});
