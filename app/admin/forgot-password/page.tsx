"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import LoginLayout from "@/app/admin/layout"
import adminLayout from "@/app/admin/styles"

const { header, paragraph, formStyles, inputWithLabel, input, submitButton, createAccountParagraph, anchor } =
  adminLayout()

const formSchema = z.object({
  email: z.string(),
})

const ForgotPassword = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <>
      <div className={header()}>
        <h1>Forgot Password</h1>
        <p className={paragraph()}>
          Enter your email below, you will receive an email with instructions on how to reset your password in a few
          minutes. You can also set a new password if you’ve never set one before.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={formStyles()}>
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
          <Button className={submitButton()} type="submit">
            Start recovery
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

ForgotPassword.getLayout = (page) => <LoginLayout>{page}</LoginLayout>

export default ForgotPassword
