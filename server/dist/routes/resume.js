"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorizeUser_1 = __importDefault(require("../middlewares/authorizeUser"));
const resume_1 = require("../controllers/resume");
const resumeRouter = (0, express_1.Router)();
resumeRouter.use(authorizeUser_1.default);
resumeRouter.post("/", resume_1.handlePostResume);
exports.default = resumeRouter;
