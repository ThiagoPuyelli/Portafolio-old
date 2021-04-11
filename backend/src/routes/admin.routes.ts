import { Router } from "express";
const router = Router();
import { registerAdmin, loginAdmin } from "../controllers/admin.controllers";
import verifyToken from "../middlewares/verifyToken";

router.post("/admin", verifyToken, registerAdmin);
router.post("/login", loginAdmin);
router.get("/verify-auth", verifyToken, (req, res) => res.json({auth: true}))

export default router;