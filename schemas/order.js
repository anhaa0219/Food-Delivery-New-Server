import mongoose from "mongoose";

const { Schema } = mongoose;

const foodOrderItemSchema = new Schema(
  {
    food: {
      type: Schema.Types.ObjectId,
      ref: "Dishes",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
);

const foodOrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    foodOrderItems: {
      type: [foodOrderItemSchema],
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const FoodOrder =
  mongoose.models.FoodOrder || mongoose.model("FoodOrder", foodOrderSchema);
