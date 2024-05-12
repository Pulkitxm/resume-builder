import mongoose from "mongoose";

async function connectToDb() {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log("Connected to db");
}
export default connectToDb;