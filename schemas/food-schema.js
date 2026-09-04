import mongoose from "mongoose";
const FoodCategorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export const FoodCategory = mongoose.model("FoodCategory", FoodCategorySchema);
