import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createBikeIntoDB } from "./bike.service";

const createBike = catchAsync(async (req, res) => {
  const { email } = req.user;
  const result = await createBikeIntoDB(req.body, email);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bike is created successfully",
    data: result,
  });
});

export { createBike };
