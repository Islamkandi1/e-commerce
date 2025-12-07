import z from "zod";

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters." })
      .max(10, { message: "First name must be at most 10 characters." }),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters." })
      .max(10, { message: "Last name must be at most 10 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." })
      .max(20, { message: "Password must be at most 20 characters." })
      .regex(/^[A-Z][a-z]{4,}[@$!%*?&][0-9]{4,}$/, {
        message:
          "Password must start with uppercase letter, one special character. at least 4 lowercase letter or number",
      }),
    confirmPassword: z
      .string()
      .min(6, { message: "confirmPassword must be at least 6 characters." })
      .max(20, { message: "confirmPassword must be at most 20 characters." })
      .regex(/^[A-Z][a-z]{4,}[@$!%*?&][0-9]{4,}$/, {
        message:
          "Password must start with uppercase letter, one special character. at least 4 lowercase letter or number",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
