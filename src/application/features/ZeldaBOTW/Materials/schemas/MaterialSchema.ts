import { z } from "zod";

export const materialCategories = [
  "monstruos",
  "criaturas",
  "materiales",
  "equipo",
  "tesoros",
] as const;

export const materialSchema = z.object({
  id_num: z
    .number()
    .int()
    .positive({ message: "ID must be a positive integer" }),
  name: z
    .string()
    .min(1, { message: "Material name is required" })
    .max(100, { message: "Name is too long" }),

  category: z
    .string()
    .min(1, { message: "Category is required" })
    .refine((val) => materialCategories.includes(val as any), {
      message: "Invalid category",
    }),
  common_locations: z
    .string()
    .min(1, { message: "At least one location is required" })
    .max(5000, { message: "Too many locations" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(500, { message: "Description is too long" }),
  cooking_effect: z.string().min(1, { message: "Cooking effect is required" }),
  hearts_recovered: z
    .number()
    .positive({ message: "Hearts recovered must be equals or more than 0 " }),
  image: z
    .string()
    .url({ message: "Image must be a valid URL" })
    .refine((url) => url.startsWith("https://"), {
      message: "Image URL must start with https://",
    })
    .optional(),
});

export type Material = z.infer<typeof materialSchema>;
