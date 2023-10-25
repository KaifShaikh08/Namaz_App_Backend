import express from "express";
import {
  createPrayerData,
  deletePrayerData,
  getAllPrayerData,
  updatePrayerData,
} from "../Controllers/PrayerController.js";

const router = express.Router();

router.post("/create", createPrayerData);
router.get("/getall", getAllPrayerData);
router.put("/updatedata/:id", updatePrayerData);
router.delete("/deletedata/:id", deletePrayerData);

export default router;
