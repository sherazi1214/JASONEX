import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Message body se phone number nikal lein (ContactFormCard.jsx isay is format mein bhejta hai)
    const phoneMatch = message.match(/Phone \(WhatsApp\):\s*(.+)/);
    const phone = phoneMatch ? phoneMatch[1].trim() : "N/A";

    const mailOptions = {
      from: `"Agencee Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Lead: ${name} — ${phone}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #f97316; padding: 16px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #fff; margin: 0;">📞 Call: ${phone}</h2>
          </div>
          <div style="border: 1px solid #eee; border-top: none; padding: 20px; border-radius: 0 0 8px 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> <a href="tel:${phone}" style="color:#f97316; font-size:18px; font-weight:bold;">${phone}</a></p>
            <hr />
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}