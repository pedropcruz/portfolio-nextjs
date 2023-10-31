import { z } from "zod"

export const RegisterUserSchema = z.object({
  firstName: z
    .string({
      required_error: "First name is required",
    })
    .min(2, "First name should be more than 2 characters"),
  lastName: z
    .string({
      required_error: "Last name is required",
    })
    .min(2, "Last name should be more than 2 characters"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(4, "Password should be more than 4 characters"),
})

export const LoginUserSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(4, "Password should be more than 4 characters"),
})

export type LoginUserInput = z.infer<typeof LoginUserSchema>
export type RegisterUserInput = z.infer<typeof RegisterUserSchema>
