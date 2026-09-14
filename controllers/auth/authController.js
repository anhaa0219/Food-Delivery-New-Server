import express from "express";
import { User } from "../../schemas/user-schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const SALT_ROUND = 10;
const JWT_SECRET = "testing"
const signAuthToken = (user)=> {
  return jwt.sign({email : user.email , password : user.password},JWT_SECRET,{expiresIn : "1d"})
}
export const SignUpController = async (request, response) => {
  try {
    const { email, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
    const user = await User.create({ email, password: hashedPassword });
    response.json({
      message1: "user created ",
      user: user,
    });
    const token = signAuthToken(user)
    response.status(201).json({ message: "User Created", user: user, token : token });
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
    const token = signAuthToken(user)
    return response.status(200).json({ message: "user found", user: user, token : token });
  } catch (err) {
    return response
      .status(500)
      .json({ message: "Internal Server Error", error: err });
  }
};
