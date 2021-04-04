import { Router } from "express";
const router = Router();

import { saveProject } from "../controllers/project.controllers";

router.post("/project", saveProject);

export default router;