import z from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email().min(1, "Email is required"),
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
export type userFormSchema = z.infer<typeof userSchema>;
