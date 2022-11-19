import { connect } from "mongoose";
import { app } from "../server";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5001;

const CONNECTION_URL = process.env.CONNECTION_URL as string;

const connectToMongoDb = async () => {
  try {
    await connect(CONNECTION_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

export default connectToMongoDb;
