"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const admin_controllers_1 = require("../controllers/admin.controllers");
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
router.post("/admin", verifyToken_1.default, admin_controllers_1.registerAdmin);
router.post("/login", admin_controllers_1.loginAdmin);
router.get("/verify-auth", verifyToken_1.default, (req, res) => res.json({ auth: true }));
exports.default = router;
