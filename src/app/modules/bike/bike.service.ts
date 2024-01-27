import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { IBike } from "./bike.interface";
import Bike from "./bike.model";
import { getBikesWithQuery } from "./bike.utils";

const getAllBikeSFromDB = async (query: Record<string, unknown>) => {
  const result = await getBikesWithQuery(query);
  return result;
};

const createBikeIntoDB = async (payload: Partial<IBike>, userEmail: string) => {
  const result = await Bike.create({ ...payload, userEmail });
  return result;
};

const removeBikeFromDB = async (payload: string) => {
  const result = await Bike.findByIdAndUpdate(
    payload,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

const updateBikeIntoDB = async (id: string, payload: Partial<IBike>) => {
  const result = await Bike.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { ...payload },
    { new: true }
  );

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, "Bike not found");
  }

  return result;
};

export {
  getAllBikeSFromDB,
  createBikeIntoDB,
  removeBikeFromDB,
  updateBikeIntoDB,
};
