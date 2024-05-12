import { Schema, model } from "mongoose";

const Resume = new Schema({
  templateNo: Number,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  data: Object
});

export default model("Resume", Resume);