import z from "zod";

export const userSchema = z.object({
  price: z.number().min(1, { message: "price must atleast be 1" }),
  userId: z.string().min(1, { message: "user id required" }),
  orderId: z.string().min(1, { message: "user id required" }),
  productId: z.string().min(1, { message: "user id required" }).optional(),
  staus: z.enum([
    "PENDING",
    "SUCCESS",
    "FAILED",
    "PROCESSING",
    "OUT FOR DELIEVRY",
    "DELIVERED",
    "CANCELLED",
  ]),
});
export type userFormSchema = z.infer<typeof userSchema>;
