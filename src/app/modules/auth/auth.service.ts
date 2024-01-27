import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import User from "../user/user.model";
import { ILoginUser } from "./auth.interface";
import { createToken } from "./auth.utils";
import config from "../../config";

const loginUserService = async (payload: ILoginUser) => {
  const user = await User.isUserExistByEmail(payload.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }

  //checking if the password is correct
  const isPasswordMatched = await User.isPasswordMatched(
    payload.password,
    user.password
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, "Password do not matched");
  }

  const jwtPayload = {
    email: user.email,
    name: user.name,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  return {
    refreshToken,
    accessToken,
  };
};
export { loginUserService };
