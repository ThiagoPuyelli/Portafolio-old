"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const contact_controllers_1 = require("../controllers/contact.controllers");
router.post("/contact", contact_controllers_1.saveContact);
router.get("/contact", verifyToken_1.default, contact_controllers_1.getContacts);
router.delete("/contact/:id", verifyToken_1.default, contact_controllers_1.deleteContact);
exports.default = router;
