import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
  createBikeIntoDB,
  removeBikeFromDB,
  updateBikeIntoDB,
} from "./bike.service";

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

const removeBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await removeBikeFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bike is removed successfully",
    data: result,
  });
});

const updateBike = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await updateBikeIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bike is updated successfully",
    data: result,
  });
});

export { createBike, removeBike, updateBike };
