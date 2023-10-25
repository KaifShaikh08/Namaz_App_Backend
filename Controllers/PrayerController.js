import { Prayer } from "../Models/PrayerModel.js";

export const createPrayerData = async (req, res) => {
  const { Masjid, Address, PrayerTime } = req.body;
  const masjid = await Prayer.findOne({ Masjid });
  if (masjid) return res.json({ message: "This masjid name is already exist" });

  const data = await Prayer.create({ Masjid, Address, PrayerTime });
  res.json({
    success: true,
    message: "Added Successfully",
  });
};

export const getAllPrayerData = async (req, res) => {
  const data = await Prayer.find({});
  if (!data)
    return res.json({
      message: "Data does not exist",
    });

  return res.json({
    success: true,
    message: data,
  });
};

export const updatePrayerData = async (req, res) => {
  const { id } = req.params;
  const updatedData = await Prayer.findByIdAndUpdate(id, req.body);
  return res.json({
    success: true,
    message: "Data updated Successfully",
  });
};

export const deletePrayerData = async (req, res) => {
  const { id } = req.params;

  const data = await Prayer.findByIdAndDelete(id, req.body);
  return res.json({
    success: true,
    message: "Deleted Successfully",
  });
};
