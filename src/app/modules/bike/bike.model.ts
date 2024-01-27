import { Schema } from "mongoose";
import { IBike, IInsurance } from "./bike.interface";
import { model } from "mongoose";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const insuranceSchema = new Schema<IInsurance>(
  {
    provided: { type: Boolean, default: false },
    policyNumber: { type: Number },
    expirationDate: { type: String },
  },
  {
    _id: false,
  }
);

const bikeSchema = new Schema<IBike>({
  userEmail: { type: String, required: true, ref: "User" },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  releaseDate: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  size: { type: String, required: true },
  type: { type: String, required: true },
  color: { type: String, required: true },
  mileage: { type: Number, required: true },
  insurance: { type: insuranceSchema },
});

bikeSchema.pre("save", async function (next) {
  const bike = this;
  const result = await Bike.find({
    name: bike.name,
    price: bike.price,
    releaseDate: bike.releaseDate,
    brand: bike.brand,
    model: bike.model,
    color: bike.color,
  });

  if (result.length) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This bike already added into database"
    );
  }
  next();
});

const Bike = model<IBike>("Bike", bikeSchema);

export default Bike;
