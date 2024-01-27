import { IBike } from "./bike.interface";
import Bike from "./bike.model";

const createBikeIntoDB = async (payload: Partial<IBike>, userEmail: string) => {
  const result = await Bike.create({ ...payload, userEmail });
  return result;
};

export { createBikeIntoDB };
