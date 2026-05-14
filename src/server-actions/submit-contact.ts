"use server";

import { z } from "zod";
import { createClient } from "next-sanity";
import { Resend } from "resend";
import { apiVersion, dataset, projectId } from "@/sanity/env";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

interface ContactState {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

// Write-authorized client
const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(prevState: ContactState, formData: FormData): Promise<ContactState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please check the form for errors.",
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    // 1. Save to Sanity CMS
    await writeClient.create({
      _type: "contactSubmission",
      name,
      email,
      subject,
      message,
    });

    // 2. Send Email via Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: process.env.EMAIL_FROM || "onboarding@resend.dev",
        to: process.env.EMAIL_TO || "admin@mergekonflict.com",
        subject: `New Contact: ${subject || "No Subject"} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
    }

    return {
      success: true,
      message: "Message sent! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
