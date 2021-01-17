import { Document } from "mongoose";
import { inflate } from "zlib";

export interface IUser extends Document {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: string;
  readonly password: string;
  readonly nickname: string;
}