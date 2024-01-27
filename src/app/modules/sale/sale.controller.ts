import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createOrderIntoDB } from "./sale.service";

const createOrder = catchAsync(async (req, res) => {
  const { email } = req.user;
  const result = await createOrderIntoDB(req.body, email);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Order is created successfully",
    data: result,
  });
});

export { createOrder };
