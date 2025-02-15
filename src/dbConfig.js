import mongoose from "mongoose";

const mongoUrl = "mongodb://127.0.0.1:27017/online_ntdl";

const dbConnect = () => {
  try {
    const connectDB = mongoose.connect(mongoUrl);
    connectDB && console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
