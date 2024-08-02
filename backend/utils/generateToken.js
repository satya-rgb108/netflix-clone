import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/enVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

  res.cookie("jwt-netflix", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15days in MS
    httpOnly: true, //prevent xss attack cross-site scripting attacks,make it not be accessed by js
    sameSite: "strict", //CSRF ATTACKS cross-site request forgery attacks
    secure: ENV_VARS.NODE_ENV !== "development",
  });

  return token;
};
