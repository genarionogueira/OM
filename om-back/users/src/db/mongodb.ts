import mongoose from 'mongoose';
import config from "../config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_STR, {dbName:'order-management'});
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;