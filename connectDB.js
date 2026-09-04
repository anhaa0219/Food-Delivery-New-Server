import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kenshi:tripleiq123@food-delivery.p4zdkqq.mongodb.net",
    );
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};
