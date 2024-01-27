import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { loginUserService } from "./auth.service";
import catchAsync from "../../utils/catchAsync";
import config from "../../config";

const loginUser = catchAsync(async (req, res) => {
  const result = await loginUserService(req.body);
  const { refreshToken, accessToken } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV === "production",
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

export { loginUser };
