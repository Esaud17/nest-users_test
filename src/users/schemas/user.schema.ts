import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
  {
    email: { type: String, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    gender: { type: String, require: true },
    password: { type: String, require: true },
    nickname: { type: String, require: true }
  },
  { timestamps: true },
);
