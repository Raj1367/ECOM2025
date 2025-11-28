import z from "zod";

export const shippingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1, "Email is required"),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Phone must contain exactly 10 digits (0-9).",
  }),
  address: z
    .string()
    .min(1, "Address must atleast be 5 characters")
    .max(250, "Address cannot be more than 250 characters"),
  city: z
    .string()
    .min(1, "city must atleast be 1 characters")
    .max(50, "city cannot be more than 50 characters"),
  state: z
    .string()
    .min(1, "state must atleast be 1 characters")
    .max(50, "state cannot be more than 50 characters"),
  postalcode: z
    .string()
    .min(1, "psotalcode must atleast be 1 characters")
    .max(10, "postalcode cannot be more than 10 characters"),
});

export type shippingFormSchema = z.infer<typeof shippingSchema>;

export const paymentsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  cardNumber: z
    .string()
    .regex(/^(\d{4} ?){4}$/, "Card number must be 16 digits"),
  expirydate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must be in MM/YY format"),
  CVV: z.string().min(3, "CVV must atleast be 3 characters"),
});

export type paymentsFormSchema = z.infer<typeof paymentsSchema>;
