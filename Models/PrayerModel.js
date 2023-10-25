import mongoose from "mongoose";

const PrayerScheema = new mongoose.Schema({
  Masjid: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },

  PrayerTime: {
    Fajar: String,
    Dhuhr: String,
    Asar: String,
    Maghrib: String,
    Isha: String,
    Jummah: String,
  },
});

export const Prayer = mongoose.model("Prayer", PrayerScheema);
