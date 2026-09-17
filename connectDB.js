import "dotenv/config";
import mongoose from "mongoose";
const MONGODB_CONNECT_URL = process.env.MONGO_DB || null;
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_CONNECT_URL);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};
