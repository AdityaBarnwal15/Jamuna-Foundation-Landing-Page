import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Volunteer from "./models/Volunteer.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err.message));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/volunteer", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone)
      return res.status(400).json({ message: "All fields required" });

    const newVolunteer = new Volunteer({ name, email, phone, message });
    await newVolunteer.save();

    const mailOptions = {
      from: `"Jamuna Foundation" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for joining Jamuna Foundation 🌿",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for showing interest in Jamuna Foundation's community campaign.</p>
        ${
          message
            ? `<p><strong>Your message:</strong> ${message}</p>`
            : ""
        }
        <p>Our team will reach out to you soon with event details.</p>
        <p style="color:#16a34a;font-weight:bold;">Together, let’s make a greener tomorrow! 🌱</p>
        <hr />
        <small>Jamuna Foundation | Chennai, India</small>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Volunteer registered successfully and email sent!",
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(process.env.PORT || 5173, () =>
  console.log(`🚀 Server running on http://localhost:${process.env.PORT || 5173}`)
);