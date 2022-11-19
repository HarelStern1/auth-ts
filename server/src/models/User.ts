import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
    },
    movies: {
      type: [
        {
          name: String,
          imgUrl: String,
          description: String,
          director: String,
          writers: String,
          stars: String,
        },
      ],
      default: [
        {
          name: "String",
          imgUrl: "String",
          description: "String",
          director: "String",
          writers: "String",
          stars: "String",
        },
      ],
    },
  },
  { minimize: false }
);

const User = mongoose.model("User", UserSchema);

export default User;
