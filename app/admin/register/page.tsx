"use client"

import { useEffect } from "react"
import Link from "next/link"
import { registerUser } from "@/services/auth"
import useStore from "@/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { handleApiError } from "@/lib/helpers"
import { RegisterUserInput, RegisterUserSchema } from "@/lib/validations/user.schema"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import LoginLayout from "@/app/admin/layout"
import adminLayout from "@/app/admin/styles"

const {
  header,
  paragraph,
  formStyles,
  inputWithLabel,
  input,
  submitButton,
  createAccountParagraph,
  anchor,
  nameWrapper,
  errorMessage,
} = adminLayout()

const Register = () => {
  const { toast } = useToast()
  const store = useStore()
  // const router = useRouter()

  const form = useForm<RegisterUserInput>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  })

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = form

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful])

  const onSubmit = async (values: RegisterUserInput) => {
    try {
      const user = await registerUser(JSON.stringify(values))
      store.setAuthUser(user)
      toast({
        variant: "default",
        title: "Success!",
        description: "There was a problem with your request.",
      })
    } catch (error) {
      if (error instanceof Error) {
        handleApiError(error)
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
        console.error("Error message: ", error.message)
      }
    }
  }

  return (
    <>
      <div className={header()}>
        <h1>Sign up</h1>
        <p className={paragraph()}>Before we start, please create your account</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={formStyles()}>
          <div className={nameWrapper()}>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className={inputWithLabel()}>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input className={input()} placeholder="Please enter your first name" {...field} />
                  </FormControl>
                  <FormMessage className={errorMessage()} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className={inputWithLabel()}>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input className={input()} placeholder="Please enter your last name" {...field} />
                  </FormControl>
                  <FormMessage className={errorMessage()} />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={inputWithLabel()}>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className={input()} placeholder="Please enter your e-mail" {...field} />
                </FormControl>
                <FormMessage className={errorMessage()} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className={inputWithLabel()}>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input className={input()} placeholder="Enter your password" type="password" {...field} />
                </FormControl>
                <FormMessage className={errorMessage()} />
              </FormItem>
            )}
          />
          <Button className={submitButton()} type="submit">
            Create account
          </Button>
        </form>
        <p className={createAccountParagraph()}>
          Already registered?{" "}
          <Link href="/admin/login" className={anchor()}>
            Sign in to your account
          </Link>
        </p>
      </Form>
    </>
  )
}

Register.getLayout = (page) => <LoginLayout>{page}</LoginLayout>

export default Register
