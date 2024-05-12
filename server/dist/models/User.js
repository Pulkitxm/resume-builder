"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String },
    password: { type: String, required: true },
    resumes: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Resume" }]
});
exports.default = (0, mongoose_1.model)("User", userSchema);
