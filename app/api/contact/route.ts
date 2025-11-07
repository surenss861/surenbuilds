import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getContactFormEmailHtml } from "@/lib/email-templates/contact-form-html";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, projectType } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      // Use your custom domain if verified, otherwise fallback to Resend's test domain
      const fromEmail = process.env.RESEND_FROM_EMAIL || "Suren Builds <onboarding@resend.dev>";
      
      // Get the HTML email template
      const emailHtml = getContactFormEmailHtml({
        name,
        email,
        company,
        projectType: projectType || "General Inquiry",
        message,
      });
      
      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: ["surensureshkumar@outlook.com"],
        replyTo: email,
        subject: `New Contact Form Submission: ${projectType || "General Inquiry"}`,
        html: emailHtml,
      });

      if (error) {
        console.error("Resend error:", error);
        throw new Error("Failed to send email");
      }
    } else {
      // Fallback: Log to console (for development)
      console.log("Contact form submission:", {
        name,
        email,
        company,
        projectType,
        message,
      });
      console.log("RESEND_API_KEY not set. Set RESEND_API_KEY in .env.local");
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

