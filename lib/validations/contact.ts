import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name.")
    .max(80, "Name must be under 80 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number.")
    .max(20, "Phone number is too long."),
  service: z.string().min(1, "Please select a service type."),
  message: z
    .string()
    .min(20, "Please share a few more details about your project.")
    .max(2000, "Message must be under 2000 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
