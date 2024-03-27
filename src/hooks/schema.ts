import { z } from "zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." }),
  amount: z.number({ invalid_type_error: "Amount is required." }).positive(),
  category: z.string().min(1, { message: "Category is required." }),
});

type FormData = z.infer<typeof schema>;

export {
  schema,
}

export type { FormData }