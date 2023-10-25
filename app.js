import express from "express";
import { connnectDB } from "./Data/Database.js";
import PrayerRouter from "./Routes/PrayerRoute.js";
import cors from "cors";
import { config } from "dotenv";

export const app = express();

connnectDB();

app.use(express.json());
cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true,
});

config({
  path: "./Data/config.env",
});

app.use("/", PrayerRouter);

app.get("/", (req, res) => {
  res.send("Working");
});
