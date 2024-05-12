import connectToDb from "./db";
import "dotenv/config";
import resumeRouter from "./routes/resume";
import UserRouter from "./routes/user";
import cookiesParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(cookiesParser());
connectToDb();

app.use("/api/_v1/resume", resumeRouter);
app.use("/api/_v1", UserRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});