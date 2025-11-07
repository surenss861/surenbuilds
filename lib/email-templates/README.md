# Email Templates for Resend

Professional HTML email templates for surenbuilds.com matching the brand aesthetic.

## Available Templates

### 1. Contact Form Email
Used when someone submits the contact form. Sends to your email with all form details.

**Function:** `getContactFormEmailHtml(props)`

**Props:**
- `name` (string) - Contact's name
- `email` (string) - Contact's email
- `company` (string, optional) - Company name
- `projectType` (string) - Type of project
- `message` (string) - Message content

**Usage:**
```typescript
import { getContactFormEmailHtml } from "@/lib/email-templates/contact-form-html";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const html = getContactFormEmailHtml({
  name: "John Doe",
  email: "john@example.com",
  company: "Acme Corp",
  projectType: "Website Redesign",
  message: "I need a new website...",
});

await resend.emails.send({
  from: "Suren Builds <contact@surenbuilds.com>",
  to: ["surensureshkumar@outlook.com"],
  subject: "New Contact Form Submission",
  html: html,
});
```

### 2. Thank You Email
Auto-reply sent to users after they submit the contact form.

**Function:** `getThankYouEmailHtml(props)`

**Props:**
- `name` (string) - Recipient's name

**Usage:**
```typescript
import { getThankYouEmailHtml } from "@/lib/email-templates/thank-you-html";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const html = getThankYouEmailHtml({
  name: "John Doe",
});

await resend.emails.send({
  from: "Suren Builds <contact@surenbuilds.com>",
  to: ["john@example.com"],
  subject: "Thank you for contacting Suren Builds",
  html: html,
});
```

## Brand Colors

All templates use the surenbuilds.com brand colors:
- **Primary Blue:** `#1B73FF`
- **Background:** `#0A0A0A`
- **Text:** `#FFFFFF`
- **Accent Background:** `#1A1A1A`
- **Border:** `#2A2A2A`
- **Muted Text:** `#666`, `#999`

## Template Features

- ✅ Dark theme matching your brand
- ✅ Responsive design (works on mobile)
- ✅ Professional typography
- ✅ HTML-safe (XSS protection with escaping)
- ✅ Table-based layout for email client compatibility
- ✅ Inline styles for maximum compatibility

## Customization

To customize templates, edit the HTML strings in:
- `lib/email-templates/contact-form-html.ts`
- `lib/email-templates/thank-you-html.ts`

All styles are inline for maximum email client compatibility.

## Testing

Test emails by:
1. Running your dev server: `npm run dev`
2. Submitting the contact form at `/contact`
3. Checking your email inbox

For production, make sure `RESEND_API_KEY` is set in your environment variables.

