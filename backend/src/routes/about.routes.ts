import { Router } from "express";
const router = Router();
import verifyToken from "../middlewares/verifyToken";
import { addAbout, updateAbout, deleteAbout, getAbouts } from "../controllers/about.controllers";

router.post("/about", verifyToken, addAbout);
router.put("/about/:id", verifyToken, updateAbout);
router.delete("/about/:id", verifyToken, deleteAbout);
router.get("/about", getAbouts);

export default router;