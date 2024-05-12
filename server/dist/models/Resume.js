"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Resume = new mongoose_1.Schema({
    templateNo: Number,
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    data: Object
});
exports.default = (0, mongoose_1.model)("Resume", Resume);
