import { IUser } from "./user.interface";
import User from "./user.model";

const createUserIntoDB = async (data: IUser) => {
  const result = await User.create(data);

  return result;
};

export { createUserIntoDB };
