import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { loginUserService, refreshTokenService } from "./auth.service";
import catchAsync from "../../utils/catchAsync";
import config from "../../config";

const loginUser = catchAsync(async (req, res) => {
  const result = await loginUserService(req.body);
  const { refreshToken, accessToken } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: false,
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is logged in succesfully!",
    data: {
      accessToken,
    },
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await refreshTokenService(refreshToken);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Access token is retrieved succesfully!",
    data: result,
  });
});

export { loginUser, refreshToken };
