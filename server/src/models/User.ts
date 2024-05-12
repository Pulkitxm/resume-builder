import { Schema, model } from "mongoose";

const userSchema= new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String },
    password: { type: String, required: true },
    resumes: [{ type: Schema.Types.ObjectId, ref: "Resume" }]
});

export default model("User", userSchema);