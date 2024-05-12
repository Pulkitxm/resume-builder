import { Router } from "express";
import authorizeUser from "../middlewares/authorizeUser";
import { handlePostResume } from "../controllers/resume";

const resumeRouter = Router();
resumeRouter.use(authorizeUser);

resumeRouter.post("/", handlePostResume);

export default resumeRouter;