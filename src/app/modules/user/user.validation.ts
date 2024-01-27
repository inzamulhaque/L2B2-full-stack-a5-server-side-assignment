import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(20),
    address: z.string(),
    contact: z.string().min(11),
  }),
});

export default userValidationSchema;
