import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import AppError from "../errors/AppError";
import httpStatus from "http-status";

const verifyJWT = async (token: string): Promise<JwtPayload> => {
  try {
    const decoded = (await jwt.verify(
      token,
      config.jwt_access_secret as string
    )) as JwtPayload;
    return decoded;
  } catch (error) {
    throw new AppError(httpStatus.FORBIDDEN, "something went wrong!");
  }
};

export default verifyJWT;
