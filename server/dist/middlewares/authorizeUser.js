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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const pass_1 = require("../utils/pass");
const User_1 = __importDefault(require("../models/User"));
function authorizeUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
        if (!token) {
            return res.status(401).json({
                message: "You are not authorized to access this route"
            });
        }
        const user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const password = user === null || user === void 0 ? void 0 : user.password;
        if (!password) {
            return res.status(401).json({
                message: "You are not authorized to access this route"
            });
        }
        const StoredPUser = yield User_1.default.findOne({ email: user.email });
        if (!StoredPUser) {
            return res.status(401).json({
                message: "You are not authorized to access this route"
            });
        }
        const StoredPass = StoredPUser.password;
        const DecodePass = jsonwebtoken_1.default.verify(StoredPass, process.env.JWT_SECRET);
        if ((0, pass_1.unHashPass)(DecodePass) !== (0, pass_1.unHashPass)(password)) {
            return res.status(401).json({
                message: "You are not authorized to access this route"
            });
        }
        const userId = StoredPUser._id;
        req.body.userId = userId;
        next();
    });
}
exports.default = authorizeUser;
;
