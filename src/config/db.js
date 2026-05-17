import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      // Helpful debug: show what dotenv injected (without leaking secrets)
      console.log("MONGO_URI is not set at connectDB(). Check dotenv loading in server.js.");
      throw new Error(
        "MONGO_URI is not set. Check .env path/value and dotenv.config() in server.js"
      );
    }
    const connection = await mongoose.connect(process.env.MONGO_URI);


    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log("Database Connection Error");
    console.log(error.message);

    process.exit(1);
  }
};

export default connectDB;