"use client";

import React, { useState, useTransition } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import { createUserAction } from "@/actions/create-new-user";
import { UserRole } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formItems = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "John",
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    placeholder: "Doe",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "john.doe@example.com",
  },
  {
    label: "Role",
    name: "role",
    type: "select",
    placeholder: "Select a role",
  },
];

function CreateUserForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CreateUserSchema>>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: UserRole.MEMBER,
    },
  });

  const onSubmit = (values: z.infer<typeof CreateUserSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      createUserAction(values).then((data) => {
        if (data.error) {
          setError(data.error);
          setSuccess("");
        } else if (data.success) {
          setSuccess(data.success);
          setError("");
          form.reset(); // Reset the form after successful submission
        }
      });
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-card rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Create New User</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            {formItems.map((item) => (
              <FormField
                key={item.name}
                control={form.control}
                name={
                  item.name as
                    | "firstName"
                    | "lastName"
                    | "email"
                    | "role"
                }
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.label}</FormLabel>
                    <FormControl>
                      {item.type === "select" ? (
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={item.placeholder}
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={UserRole.MEMBER}>
                              Member
                            </SelectItem>
                            <SelectItem value={UserRole.LEADER}>
                              Leader
                            </SelectItem>
                            <SelectItem value={UserRole.ADMIN}>
                              Admin
                            </SelectItem>
                            <SelectItem value={UserRole.SUPERADMIN}>
                              Super Admin
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input
                          {...field}
                          placeholder={item.placeholder}
                          type={item.type}
                          disabled={isPending}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? "Creating..." : "Create User"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default CreateUserForm;
