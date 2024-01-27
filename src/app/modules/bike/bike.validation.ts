import { z } from "zod";

const insuranceValidationSchema = z.object({
  provided: z.boolean().optional(),
  policyNumber: z.number().optional(),
  expirationDate: z.string().optional(),
});

const bikeValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    releaseDate: z.string(),
    brand: z.string(),
    model: z.string(),
    size: z.string(),
    type: z.string(),
    color: z.string(),
    mileage: z.number(),
    insurance: insuranceValidationSchema.optional(),
  }),
});

const updateBikeValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().optional(),
    quantity: z.number().optional(),
    releaseDate: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    size: z.string().optional(),
    type: z.string().optional(),
    color: z.string().optional(),
    mileage: z.number().optional(),
    insurance: insuranceValidationSchema.optional(),
  }),
});

export { updateBikeValidationSchema };

export default bikeValidationSchema;
