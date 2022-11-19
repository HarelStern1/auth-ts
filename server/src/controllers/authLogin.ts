import { MiddleWareFn } from ".";
import User from "../models/User";
import isEmail from "../utils/functions/isEmail";
import verifyFilledInputs from "../utils/functions/verifyFilledInputs";
import bcrypt from "bcrypt";

const authLogin: MiddleWareFn = async (req, res, next) => {
  const { email, password } = req.body;

  // are all fields filled
  const filledInputs = verifyFilledInputs(email, password);

  if (!filledInputs) {
    res.status(409).send({ message: "All input fields must be filled." });
  }

  // isEmail
  const validEmail = isEmail(email);

  if (!validEmail) {
    res.status(409).send({ message: "Invalid email, please try again." });
  }

  // Validate if user exist in our database
  const user = await User.findOne({ email });

  if (!user) {
    res.status(409).send("There is no user with this email.");
  } else {
    req.body.user = user;
  }

  if (!(await bcrypt.compare(password, user?.password as string))) {
    res.status(409).send("Incorrect Password.");
  }

  next();
};

export default authLogin;
