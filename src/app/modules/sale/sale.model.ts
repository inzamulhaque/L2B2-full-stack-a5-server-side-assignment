import { Schema, model } from "mongoose";
import { ISale } from "./sale.interface";
import Bike from "../bike/bike.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const saleSchema = new Schema<ISale>(
  {
    userEmail: {
      type: String,
      required: true,
      ref: "User",
    },

    bikeId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Bike",
    },

    buyerName: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    totalAmount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

saleSchema.pre("save", async function (next) {
  const order: ISale = this;

  if (order.quantity <= 0) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Quantity must be one or more then one"
    );
  }

  const bike = await Bike.findById(order.bikeId);

  if (!bike || bike.isDeleted) {
    throw new AppError(httpStatus.BAD_REQUEST, "Bike Not Found");
  }

  if (order.quantity > bike.quantity) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Order quantity more than available quantity!"
    );
  } else {
    const newQuantity = bike.quantity - order.quantity;

    if (newQuantity === 0) {
      await Bike.findByIdAndUpdate(order.bikeId, {
        quantity: newQuantity,
        isVisible: false,
      });
    } else {
      await Bike.findByIdAndUpdate(order.bikeId, { quantity: newQuantity });
    }

    order.totalAmount = order.quantity * bike.price;
  }

  next();
});

const Sale = model<ISale>("Sale", saleSchema);

export default Sale;
