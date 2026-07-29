"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscriberSchema, type SubscriberInput } from "@/lib/subscriber";

type ApiResponse = {
  message?: string;
};

export function EmailForm() {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm<SubscriberInput>({
    resolver: zodResolver(subscriberSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: SubscriberInput) => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as ApiResponse;

      if (response.status === 409) {
        const message = data.message ?? "This email is already subscribed.";
        setError("email", { message });
        toast.info(message);
        return;
      }

      if (!response.ok) {
        throw new Error(data.message);
      }

      reset();
      toast.success("You’re on the list. We’ll be in touch.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      className="mx-auto mt-10 w-full max-w-xl"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="min-w-0 flex-1">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            placeholder="you@example.com"
            {...register("email")}
          />
        </div>
        <Button
          aria-label="Notify me when SJONWORLD launches"
          className="w-full shrink-0 sm:w-auto"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Joining…" : "Notify Me"}
        </Button>
      </div>
      <p
        className="mt-3 min-h-5 text-left text-sm text-red-600"
        id="email-error"
        role={errors.email ? "alert" : undefined}
      >
        {errors.email?.message}
      </p>
    </form>
  );
}
