import { ISale } from "./sale.interface";
import Sale from "./sale.model";

const createOrderIntoDB = async (
  payload: Partial<ISale>,
  userEmail: string
) => {
  const result = await Sale.create({ ...payload, userEmail });

  return result;
};

const getSaleHistoryFromDB = async (time: string) => {
  let timeInNumber: number;
  switch (time) {
    case "Weekly":
      timeInNumber = 7;
      break;

    case "Daily":
      timeInNumber = 0;
      break;

    case "Monthly":
      timeInNumber = 30;
      break;

    case "Yearly":
      timeInNumber = 360;
      break;

    default:
      timeInNumber = 0;
      break;
  }

  const date = new Date();
  date.setDate(date.getDate() - timeInNumber);

  const result = await Sale.find({ createdAt: { $gte: date.toISOString() } });
  return result;
};

export { createOrderIntoDB, getSaleHistoryFromDB };
