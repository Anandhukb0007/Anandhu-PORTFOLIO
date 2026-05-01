"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 12) {
    errors.message = "Message should be at least 12 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setStatus("idle");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
          className="w-full rounded-2xl border border-slate-300/50 bg-white/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700/50 dark:bg-slate-900/50 dark:text-slate-100 dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400/10"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? <p className="mt-1.5 text-xs font-medium text-red-500">{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          className="w-full rounded-2xl border border-slate-300/50 bg-white/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700/50 dark:bg-slate-900/50 dark:text-slate-100 dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400/10"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? <p className="mt-1.5 text-xs font-medium text-red-500">{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full resize-none rounded-2xl border border-slate-300/50 bg-white/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700/50 dark:bg-slate-900/50 dark:text-slate-100 dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400/10"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p className="mt-1.5 text-xs font-medium text-red-500">{errors.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status === "success" ? (
        <p className="text-center text-sm font-medium text-indigo-600 dark:text-indigo-400">Message sent successfully!</p>
      ) : null}
      {status === "error" ? (
        <p className="text-center text-sm font-medium text-red-500">Could not send message. Please try again.</p>
      ) : null}
    </form>
  );
}
