import React, { useState, useTransition, Suspense } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { signInAction } from "@/actions/sign-in";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormSuccess from "../form-success";
import FormError from "../form-error";

const formFields = [
  {
    label: "Email",
    placeholder: "tvoj.mail@estiem.org",
  },
  {
    label: "Lozinka",
    placeholder: "●●●●●●●●●●●●●●●●",
  },
];

function SignInForm() {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    setSuccess("");
    setError("");

    startTransition(() => {
      signInAction(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }
          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }
        })
        .catch(() =>
          setError("An error occurred. Please try again.")
        );
    });
  };

  return (
    <Suspense>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {formFields.map((field) => (
            <FormField
              key={field.placeholder}
              control={form.control}
              name={field.label === "Email" ? "email" : "password"}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <Input
                      {...formField}
                      placeholder={field.placeholder}
                      type={
                        field.label === "Lozinka"
                          ? "password"
                          : "text"
                      }
                      disabled={isPending}
                      className={`mt-1 block w-full focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300 rounded-md shadow-sm focus:border-primary-800 placeholder:text-secondary
                      `}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            type="submit"
            className="w-full bg-gradient-to-b from-primary-800 to-primary-600 hover:transform hover:scale-105 transition duration-300 text-background font-bold py-2 px-4 rounded"
            disabled={isPending}
          >
            Prijavi se
          </Button>
          <FormSuccess message={success} />
          <FormError message={error} />
        </form>
      </Form>
    </Suspense>
  );
}

export default SignInForm;
