import { Router } from "express";
const router = Router();
import multer from "../middlewares/multer";

import { saveProject, getProjects, getProject, deleteProject, updateProject } from "../controllers/project.controllers";

router.post("/project", multer.single("image"), saveProject);
router.get("/project", getProjects);
router.get("/project/:id", getProject);
router.delete("/project/:id", deleteProject);
router.put("/project/:id", multer.single("image"), updateProject);

export default router;