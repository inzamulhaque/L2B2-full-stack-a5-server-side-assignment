import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createUserIntoDB } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const result = await createUserIntoDB(req.body);

  const { password, ...rest } = result.toObject();

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User is created successfully",
    data: rest,
  });
});

export { createUser };
