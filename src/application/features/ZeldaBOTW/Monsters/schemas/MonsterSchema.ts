import { z } from "zod";

export const monsterCategories = [
  "monstruos",
  "criaturas",
  "materiales",
  "equipo",
  "tesoros",
] as const;

export const monsterSchema = z.object({
  id_num: z
    .number()
    .int()
    .positive({ message: "ID must be a positive integer" }),

  name: z
    .string()
    .min(1, { message: "Monster name is required" })
    .max(100, { message: "Name is too long" }),

  category: z
    .string()
    .min(1, { message: "Category is required" })
    .refine((val) => monsterCategories.includes(val as any), {
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

  drops: z.string().min(0).max(5000, { message: "Too many drop items" }),

  image: z
    .string()
    .url({ message: "Image must be a valid URL" })
    .refine((url) => url.startsWith("https://"), {
      message: "Image URL must start with https://",
    })
    .optional(),
});

export type Monster = z.infer<typeof monsterSchema>;
