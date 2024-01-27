import { z } from "zod";

const saleValidationSchema = z.object({
  body: z.object({
    bikeId: z.string(),
    buyerName: z.string(),
    date: z.string(),
    quantity: z.number(),
  }),
});

export default saleValidationSchema;
