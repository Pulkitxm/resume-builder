import { Router } from "express";
import authorizeUser from "../middlewares/authorizeUser";
import { handleGetResume, handlePostResume } from "../controllers/resume";

const resumeRouter = Router();
resumeRouter.use(authorizeUser);

resumeRouter.get("/", handleGetResume);
resumeRouter.post("/", handlePostResume);

export default resumeRouter;