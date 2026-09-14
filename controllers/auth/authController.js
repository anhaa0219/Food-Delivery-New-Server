import express from "express";
import { User } from "../../schemas/user-schema.js";
import bcrypt from "bcryptjs";
const SALT_ROUND = 10;
export const SignUpController = async (request, response) => {
  try {
    const { email, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
    const user = await User.create({ email, password: hashedPassword });
    response.json({
      message1: "user created ",
      user: user,
    });
    response.status(201).json({ message: "User Created", user: user });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
export const LoginController = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });
    if (!user) {
      return response.status(404).json({ message: "user not found" });
    }
    const comparedPassword = await bcrypt.compare(password, user.password);
    if (!comparedPassword) {
      return response.status(401).json({ message: "Wrong password" });
    }
    return response.status(200).json({ message: "user found", user: user });
  } catch (err) {
    return response
      .status(500)
      .json({ message: "Internal Server Error", error: err });
  }
};
