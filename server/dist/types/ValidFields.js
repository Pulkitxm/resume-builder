"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ValidFields = zod_1.z.object({
    templateNo: zod_1.z.number(),
    name: zod_1.z.string().optional(),
    proffesionTitle: zod_1.z.string().optional(),
    aboutMe: zod_1.z.string().optional(),
    workExperience: zod_1.z.array(zod_1.z.object({
        startDate: zod_1.z.string(),
        endDate: zod_1.z.string(),
        position: zod_1.z.string(),
        company: zod_1.z.string(),
        description: zod_1.z.string(),
    })).optional(),
    skills: zod_1.z.array(zod_1.z.string()).optional(),
    contacts: zod_1.z.object({
        phone: zod_1.z.string(),
        email: zod_1.z.string(),
        address: zod_1.z.string(),
        website: zod_1.z.string(),
    }).optional(),
    education: zod_1.z.object({
        name: zod_1.z.string(),
        university: zod_1.z.string(),
    }).optional(),
    imageURL: zod_1.z.string().optional(),
});
exports.default = ValidFields;
