import z from "zod";
export const ProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  description: z.string().min(1, "Description is required"),
  price: z
  .string()
  .regex(/^\d+(\.\d{1,2})?$/, {
    message: "Price must be a valid number (digits only, optional decimals).",
  }),
  category: z.string().min(1, "Category is required"),
  sizes: z.array(z.string()).min(1, "At least one size is required"),
  colors: z.array(z.string()).min(1, "At least one color is required"),
  stockMatrix: z
    .array(
      z.object({
        size: z.string(),
        color: z.string(),
        quantity: z.number().min(0, "Quantity must be ≥ 0"),
      })
    )
    .optional(),
  images: z.array(z.instanceof(File)).optional(),
});

export type ProductFormSchema = z.infer<typeof ProductSchema>;
