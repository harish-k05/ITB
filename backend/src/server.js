import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

dotenv.config({
  path: "./backend/.env",
});

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is Running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("MongoDB Connection ERROR :", error);
  }
};

startServer();
