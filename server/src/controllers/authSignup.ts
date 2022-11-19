import { MiddleWareFn } from ".";
import bcrypt from "bcrypt";
import User from "../models/User";
import isEmail from "../utils/functions/isEmail";
import verifyFilledInputs from "../utils/functions/verifyFilledInputs";

const authSignup: MiddleWareFn = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // are all fields filled
    const filledInputs = verifyFilledInputs(name, email, password);

    if (!filledInputs) {
      res.status(409).send({ message: "All input fields must be filled." });
    }

    // isEmail
    const validEmail = isEmail(email);

    if (!validEmail) {
      res.status(409).send({ message: "Invalid email, please try again." });
    }

    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      res.status(409).send("User with this email address already exists.");
    }

    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    req.body.user = user;

    next();
  } catch (err) {
    console.log(err);
  }
};

export default authSignup;
