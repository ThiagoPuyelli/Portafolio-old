import { Router } from "express";
const router = Router();
import verifyToken from "../middlewares/verifyToken";
import { saveContact, getContacts, deleteContact } from "../controllers/contact.controllers";

router.post("/contact", saveContact);
router.get("/contact", verifyToken, getContacts);
router.delete("/contact/:id", verifyToken, deleteContact);

export default router;