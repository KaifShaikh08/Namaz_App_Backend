import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export const connnectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017", {
      dbName: "NamazPrayerTime_App",
    })
    .then((e) => {
      console.log("Database is connected");
    })
    .catch((e) => {
      console.log("Database is not connected ", e);
    });
};
