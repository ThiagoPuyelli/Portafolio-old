import { Router } from "express";
const router = Router();
import verifyToken from "../middlewares/verifyToken";
import multer from "../middlewares/multer";
import { saveSkill, getSkills } from "../controllers/skill.controllers";

router.post("/skill", verifyToken, multer.single("image"), saveSkill);
router.get("/skill", getSkills);

export default router;