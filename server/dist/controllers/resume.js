"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePostResume = void 0;
const ValidFields_1 = __importDefault(require("../types/ValidFields"));
const Resume_1 = __importDefault(require("../models/Resume"));
function handlePostResume(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const result = ValidFields_1.default.safeParse(body);
        const userID = req.body.userId;
        if (!userID) {
            return res.status(401).json({
                message: "You are not authorized to access this route"
            });
        }
        if (!result.success) {
            return res.status(400).send(result.error);
        }
        yield Resume_1.default.deleteMany({});
        const newResume = new Resume_1.default({
            templateNo: 1,
            data: result.data,
            userId: userID
        });
        yield newResume.save();
        res.send(newResume);
    });
}
exports.handlePostResume = handlePostResume;
