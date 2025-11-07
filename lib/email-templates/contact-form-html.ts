/**
 * Contact Form Email Template (HTML)
 * Professional email template matching surenbuilds.com brand
 */

export function getContactFormEmailHtml(props: {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
}) {
  const { name, email, company, projectType, message } = props;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0A0A0A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #0A0A0A; border-collapse: collapse;">
          <!-- Header -->
          <tr>
            <td style="padding-bottom: 24px; border-bottom: 2px solid #1B73FF;">
              <h1 style="color: #1B73FF; font-size: 28px; font-weight: 600; margin: 0 0 8px 0; line-height: 1.2;">
                New Contact Form Submission
              </h1>
              <p style="color: #666; font-size: 14px; margin: 0;">
                From surenbuilds.com
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding-top: 32px;">
              <!-- Name -->
              <table role="presentation" style="width: 100%; background-color: #1A1A1A; border-radius: 8px; border: 1px solid #2A2A2A; margin-bottom: 12px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <p style="color: #999; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">Name</p>
                    <p style="color: #FFFFFF; font-size: 16px; margin: 0; line-height: 1.5;">${escapeHtml(name)}</p>
                  </td>
                </tr>
              </table>

              <!-- Email -->
              <table role="presentation" style="width: 100%; background-color: #1A1A1A; border-radius: 8px; border: 1px solid #2A2A2A; margin-bottom: 12px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <p style="color: #999; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">Email</p>
                    <a href="mailto:${escapeHtml(email)}" style="color: #1B73FF; font-size: 16px; text-decoration: none; margin: 0;">${escapeHtml(email)}</a>
                  </td>
                </tr>
              </table>

              ${company ? `
              <!-- Company -->
              <table role="presentation" style="width: 100%; background-color: #1A1A1A; border-radius: 8px; border: 1px solid #2A2A2A; margin-bottom: 12px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <p style="color: #999; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">Company</p>
                    <p style="color: #FFFFFF; font-size: 16px; margin: 0; line-height: 1.5;">${escapeHtml(company)}</p>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Project Type -->
              <table role="presentation" style="width: 100%; background-color: #1A1A1A; border-radius: 8px; border: 1px solid #2A2A2A; margin-bottom: 12px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <p style="color: #999; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">Project Type</p>
                    <p style="color: #FFFFFF; font-size: 16px; margin: 0; line-height: 1.5;">${escapeHtml(projectType)}</p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table role="presentation" style="width: 100%; margin-top: 32px; border-collapse: collapse;">
                <tr>
                  <td>
                    <h2 style="color: #FFFFFF; font-size: 20px; font-weight: 600; margin: 0 0 16px 0;">Message</h2>
                    <table role="presentation" style="width: 100%; background-color: #1A1A1A; border-radius: 8px; padding: 20px; border-left: 4px solid #1B73FF; border-collapse: collapse;">
                      <tr>
                        <td>
                          <p style="color: #FFFFFF; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top: 32px; border-top: 1px solid #2A2A2A;">
              <table role="presentation" style="width: 100%; text-align: center; border-collapse: collapse;">
                <tr>
                  <td>
                    <p style="color: #666; font-size: 12px; margin: 0 0 12px 0;">
                      This email was sent from the contact form on surenbuilds.com
                    </p>
                    <a href="mailto:${escapeHtml(email)}" style="display: inline-block; background-color: #1B73FF; color: #FFFFFF; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600;">
                      Reply to ${escapeHtml(name)}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}


