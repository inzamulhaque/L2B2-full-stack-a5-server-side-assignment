import { z } from "zod";

const loginUserValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
  }),
});

export default loginUserValidationSchema;
