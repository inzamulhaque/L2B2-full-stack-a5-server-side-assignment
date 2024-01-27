import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

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
  isUserExistByCustomId(id: string): Promise<IUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
