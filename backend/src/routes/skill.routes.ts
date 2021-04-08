import { Router } from "express";
const router = Router();
import verifyToken from "../middlewares/verifyToken";
import multer from "../middlewares/multer";
import { saveSkill, getSkills, updateSkill, deleteSkill } from "../controllers/skill.controllers";

router.post("/skill", verifyToken, multer.single("image"), saveSkill);
router.get("/skill", getSkills);
router.put("/skill/:id", verifyToken, multer.single("image"), updateSkill)
router.delete("/skill/:id", verifyToken, deleteSkill);

export default router;