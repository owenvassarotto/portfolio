import React from "react";
import {
  Html,
  Head,
  Heading,
  Body,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {

  const actualYear = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body style={{ backgroundColor: "#f3f4f6", color: "#000000", fontFamily: "Arial, sans-serif" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <Section
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #dddddd",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
            }}
          >
            <Heading style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "#333333" }}>
              New message from contact form
            </Heading>
            <Text style={{ fontSize: "16px", marginBottom: "10px", color: "#555555" }}>
              You received the following message from the contact form:
            </Text>
            <Text style={{ fontSize: "16px", marginBottom: "20px", fontStyle: "italic", color: "#333333" }}>
              {message}
            </Text>
            <Hr style={{ borderColor: "#dddddd", margin: "20px 0" }} />
            <Text style={{ fontSize: "16px", marginBottom: "10px", color: "#555555" }}>
              <strong>Sender's Email:</strong> {senderEmail}
            </Text>
            <Text style={{ fontSize: "16px", marginBottom: "10px", color: "#555555" }}>
            Feel free to reply to this email. If you prefer, you can also contact the sender using their email address provided above.
            </Text>
            <Hr style={{ borderColor: "#dddddd", margin: "20px 0" }} />
            <Text style={{ fontSize: "14px", color: "#999999", textAlign: "center" }}>
              © {actualYear} Owen Vassarotto's Portfolio. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
