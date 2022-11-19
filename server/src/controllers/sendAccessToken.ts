import { MiddleWareFn } from ".";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const sendAccessToken: MiddleWareFn = (req, res) => {
  const { user } = req.body;

  // Create token
  const accessToken = jwt.sign({ user }, process.env.JWT_SECRET_KEY as string);

  res.status(201).json({
    accessToken,
    user,
  });
};

export default sendAccessToken;
