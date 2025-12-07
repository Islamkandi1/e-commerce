import z from "zod";

export const loginSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." })
      .max(20, { message: "Password must be at most 20 characters." })
      .regex(/^[A-Z][a-z]{4,}[@$!%*?&][0-9]{4,}$/, {
        message:
          "Password must start with uppercase letter, one special character. at least 4 lowercase letter or number",
      }),
  })

export type LoginSchemaType = z.infer<typeof loginSchema>;
