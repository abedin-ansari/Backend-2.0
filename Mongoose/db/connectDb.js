import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;

// mongodb://localhost:27017/TestMongo
