import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./DB/Database.js";
import userRouter from "./router/user-router.js";
import otpRouter from "./router/otp-router.js";
import transactionRouter from "./router/transaction-router.js";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import path from "path";

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
);

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response) => {
    response.send("Hello World")
})

app.use("/api/user", userRouter);
app.use("/api/otp", otpRouter);
app.use("/api/transaction", transactionRouter);


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})