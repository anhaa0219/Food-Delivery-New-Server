import express from "express";
import { User } from "../../schemas/user-schema.js";

export const SignUpController = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.create({ email, password });
    response.json({
      message1: "user created ",
      user: user,
    });
    response.status(201).json({ message: "User Created", error: err });
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
    return response.status(200).json({ message: "user found", user: user });
  } catch (err) {
    return response
      .status(500)
      .json({ message: "Internal Server Error", error: err });
  }
};
