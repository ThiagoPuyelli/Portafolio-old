import { Router } from "express";
const router = Router();
import verifyToken from "../middlewares/verifyToken";
import multer from "../middlewares/multer";

import { saveProject, getProjects, getProject, deleteProject, updateProject } from "../controllers/project.controllers";

router.post("/project", verifyToken, multer.single("image"), saveProject);
router.get("/project", getProjects);
router.get("/project/:id", getProject);
router.delete("/project/:id", verifyToken, deleteProject);
router.put("/project/:id", verifyToken, multer.single("image"), updateProject);

export default router;