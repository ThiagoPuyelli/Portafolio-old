import { Router } from "express";
const router = Router();
import { registerAdmin, loginAdmin } from "../controllers/admin.controllers";
import verifyToken from "../middlewares/verifyToken";

router.post("/admin", verifyToken, registerAdmin);
router.post("/login", loginAdmin);

export default router;