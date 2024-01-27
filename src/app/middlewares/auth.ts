import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";
import User from "../modules/user/user.model";
import verifyJWT from "../utils/verifyJWT";

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    // checking if the given token is valid
    const decoded = (await verifyJWT(token)) as JwtPayload;

    const { email, name, iat } = decoded;

    // checking if the user is exist
    const user = await User.isUserExistByEmail(email);

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
    }
    // checking if the user is already deleted

    const isActive = user?.isActive;

    if (!isActive) {
      throw new AppError(httpStatus.FORBIDDEN, "This user is not active !");
    }

    req.user = decoded as JwtPayload;

    next();
  });
};

export default auth;
