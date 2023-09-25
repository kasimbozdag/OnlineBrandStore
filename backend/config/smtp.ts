export const smtpConfig = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),  // Defaulting to port 587
    secure: (process.env.SMTP_SECURE === 'true'),  // True for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,  // Your SMTP username
      pass: process.env.SMTP_PASS,  // Your SMTP password
    },
    tls: {
      rejectUnauthorized: (process.env.SMTP_REJECT_UNAUTHORIZED !== 'false')  // Only set to false when testing with self-signed certificates
    }
  };
  