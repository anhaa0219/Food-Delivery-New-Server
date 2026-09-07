import express from "express";
import { FoodCategory } from "../../schemas/category-schema.js";

export const foodCategoryControllerCreate = async (request, response) => {
  try {
    const { categoryName, createdAt, updatedAt } = request.body;
    const category = await FoodCategory.create({
      categoryName,
    });
    response.json({
      message: "Food category added successfully",
      category: category,
    });
    response
      .status(201)
      .json({ message: "Category Created", category: "category" });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
export const foodCategoryControllerRead = async (request, response) => {
  try {
    const { categoryName, createdAt, updatedAt } = request.body;
    const category = await FoodCategory.findOne({
      categoryName: categoryName,
    });
    response.json({
      message: "Food category read successfully",
      category: category,
    });
    response
      .status(201)
      .json({ message: "Category Created", category: "category" });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
export const foodCategoryControllerUpdate = async (request, response) => {
  try {
    const { categoryName } = request.body;
    const updatedCategory = await FoodCategory.findByIdAndUpdate({
      categoryName: categoryName,
    });
    response.json({
      message: "Food category updated successfully",
      category: category,
    });
    response
      .status(201)
      .json({ message: "Category Created", category: "category" });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
export const foodCategoryControllerDelete = async (request, response) => {
  try {
    const { categoryName } = request.body;
    const category = await FoodCategory.findByIdAndDelete({
      categoryName: categoryName,
    });
    response.json({
      message: "Food category deleted successfully",
      category: category,
    });
    response
      .status(201)
      .json({ message: "Category Created", category: "category" });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
