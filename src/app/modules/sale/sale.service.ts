import { ISale } from "./sale.interface";
import Sale from "./sale.model";

const createOrderIntoDB = async (
  payload: Partial<ISale>,
  userEmail: string
) => {
  const result = await Sale.create({ ...payload, userEmail });

  return result;
};

export { createOrderIntoDB };
