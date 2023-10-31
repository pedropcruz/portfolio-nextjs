"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { loginUser } from "@/services/auth"
import useStore from "@/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { handleApiError } from "@/lib/helpers"
import { LoginUserInput, LoginUserSchema } from "@/lib/validations/user.schema"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import LoginLayout from "@/app/admin/layout"
import adminLayout from "@/app/admin/styles"

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
})

const {
  formStyles,
  paragraph,
  inputWithLabel,
  input,
  submitButton,
  wrapCheckboxAndAnchor,
  checkboxWrapper,
  checkboxLabel,
  anchor,
  createAccountParagraph,
  header,
} = adminLayout()

const Login = () => {
  const store = useStore()
  const router = useRouter()

  const form = useForm<LoginUserInput>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: "",
      password: "",
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

  useEffect(() => {
    store.reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    store.setRequestLoading(true)
    try {
      await loginUser(JSON.stringify(values))

      toast({
        variant: "default",
        title: "Loggedin in successfully!",
      })

      router.push("/")
    } catch (e) {
      console.log(e)
      if (e instanceof Error) {
        handleApiError(e)
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: e.message,
        })
        console.error("Error message: ", e.message)
      }
    } finally {
      store.setRequestLoading(false)
    }
  }

  return (
    <>
      <div className={header()}>
        <h1>Sign in</h1>
        <p className={paragraph()}>Enter your authentication details</p>
      </div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className={formStyles()}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={inputWithLabel()}>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className={input()} placeholder="Please enter your e-mail" {...field} />
                </FormControl>
                <FormMessage />
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
                  <Input
                    type="password"
                    className={input()}
                    placeholder="Please enter your password"
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className={wrapCheckboxAndAnchor()}>
            <div className={checkboxWrapper()}>
              <Checkbox id="remember" />
              <label htmlFor="remember" className={checkboxLabel()}>
                Remember me
              </label>
            </div>
            <Link href="/admin/forgot-password" className={anchor()}>
              Recover Password
            </Link>
          </div>
          <Button className={submitButton()} type="submit">
            Sign in
          </Button>
        </form>
        <p className={createAccountParagraph()}>
          You don't have an account?{" "}
          <Link href="/admin/register" className={anchor()}>
            Create an account
          </Link>
        </p>
      </Form>
    </>
  )
}

Login.getLayout = (page) => <LoginLayout>{page}</LoginLayout>

export default Login
