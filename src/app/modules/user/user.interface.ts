import { Model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  address: string;
  contact: string;
  isActive?: boolean;
  role?: "user";
}

export interface UserModel extends Model<IUser> {
  isUserExistByEmail(email: string): Promise<IUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}
