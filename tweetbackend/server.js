import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import connectDB from "./db/config.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/v1/auth",authRoutes);

app.listen(PORT,()=>{
console.log(`Server is running on ${PORT}`);
connectDB();
});