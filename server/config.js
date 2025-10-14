import dotenv from "dotenv";
dotenv.config();

export const config = {
  mongoURI: process.env.MONGO_URI,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  port: process.env.PORT || 5000,
};
