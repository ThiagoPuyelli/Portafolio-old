"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const multer_1 = __importDefault(require("../middlewares/multer"));
const skill_controllers_1 = require("../controllers/skill.controllers");
router.post("/skill", verifyToken_1.default, multer_1.default.single("image"), skill_controllers_1.saveSkill);
router.get("/skill", skill_controllers_1.getSkills);
exports.default = router;
