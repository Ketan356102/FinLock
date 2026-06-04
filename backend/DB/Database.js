import mongoose from "mongoose";

export const connectDB= async (req,res) => {
    const db = process.env.MONGO_URL;
    const { connection } = await mongoose.connect(db);
    console.log("MongoDB Connected Successfully");
}