/**
 * Thank You Email Template (HTML)
 * Auto-reply sent to users after contact form submission
 */

export function getThankYouEmailHtml(props: { name: string }) {
  const { name } = props;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - Suren Builds</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0A0A0A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #0A0A0A; border-collapse: collapse;">
          <!-- Header -->
          <tr>
            <td style="padding-bottom: 24px; border-bottom: 2px solid #1B73FF; text-align: center;">
              <h1 style="color: #1B73FF; font-size: 32px; font-weight: 600; margin: 0 0 8px 0; line-height: 1.2;">
                Thank You, ${escapeHtml(name)}!
              </h1>
              <p style="color: #999; font-size: 16px; margin: 0;">
                We've received your message
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding-top: 32px;">
              <p style="color: #FFFFFF; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
                Thank you for reaching out to Suren Builds. I've received your message and will get back to you within 24 hours.
              </p>

              <p style="color: #FFFFFF; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
                In the meantime, feel free to:
              </p>

              <table role="presentation" style="width: 100%; background-color: #1A1A1A; border-radius: 8px; padding: 20px; border: 1px solid #2A2A2A; margin: 24px 0; border-collapse: collapse;">
                <tr>
                  <td>
                    <p style="color: #FFFFFF; font-size: 15px; line-height: 1.8; margin: 0 0 8px 0;">• Browse my work at surenbuilds.com/work</p>
                    <p style="color: #FFFFFF; font-size: 15px; line-height: 1.8; margin: 0 0 8px 0;">• Learn about my retainer services</p>
                    <p style="color: #FFFFFF; font-size: 15px; line-height: 1.8; margin: 0;">• Book a call to discuss your project</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding: 32px 0; text-align: center;">
              <a href="https://calendly.com/surensureshkumar" style="display: inline-block; background-color: #1B73FF; color: #FFFFFF; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 600;">
                Book a Discovery Call
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top: 32px; border-top: 1px solid #2A2A2A; text-align: center;">
              <p style="color: #999; font-size: 14px; line-height: 1.6; margin: 0 0 12px 0;">
                Best regards,<br />
                <strong>Suren Sureshkumar</strong><br />
                Suren Builds
              </p>
              <a href="https://surenbuilds.com" style="color: #1B73FF; font-size: 14px; text-decoration: none;">
                surenbuilds.com
              </a>
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


