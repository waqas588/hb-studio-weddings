import { z } from "zod";

/**
 * Single source of truth for booking form validation. Imported by
 * both the client form (React Hook Form + zodResolver) and the
 * server route handler, so nothing is trusted from the client alone.
 */

const trimmedString = (max: number) =>
  z
    .string()
    .trim()
    .min(1, "This field is required.")
    .max(max, `Please keep this under ${max} characters.`);

export const contactFormSchema = z.object({
  fullName: trimmedString(100).regex(
    /^[\p{L}\p{M}'.\- ]+$/u,
    "Please use only letters and basic punctuation."
  ),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .max(254, "Email is too long.")
    .email("Please enter a valid email address."),
  phone: trimmedString(30).regex(
    /^[+\d][\d\s()-]{6,29}$/,
    "Please enter a valid phone or WhatsApp number."
  ),
  weddingDate: z
    .string()
    .trim()
    .min(1, "Please select a date.")
    .refine((val) => !Number.isNaN(Date.parse(val)), "Please select a valid date."),
  message: z
    .string()
    .trim()
    .max(1000, "Please keep your message under 1000 characters.")
    .optional()
    .default(""),
  // Honeypot field: real users never fill this in. Any value here
  // signals an automated submission and is silently rejected.
  company: z.string().max(0).optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaults: Partial<ContactFormValues> = {
  message: "",
  company: "",
};
