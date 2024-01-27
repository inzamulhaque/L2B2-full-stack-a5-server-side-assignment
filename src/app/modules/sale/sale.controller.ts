import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createOrderIntoDB, getSaleHistoryFromDB } from "./sale.service";

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

const getSaleHistory = catchAsync(async (req, res) => {
  const { time } = req.query;
  const result = await getSaleHistoryFromDB(time as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get Sale History successfully",
    data: result,
  });
});

export { createOrder, getSaleHistory };
