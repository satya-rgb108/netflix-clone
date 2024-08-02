import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },

    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      default: "",
    },
    searchHistroy: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
