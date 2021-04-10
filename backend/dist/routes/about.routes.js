"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const about_controllers_1 = require("../controllers/about.controllers");
router.post("/about", verifyToken_1.default, about_controllers_1.addAbout);
router.put("/about/:id", verifyToken_1.default, about_controllers_1.updateAbout);
router.delete("/about/:id", verifyToken_1.default, about_controllers_1.deleteAbout);
router.get("/about", about_controllers_1.getAbouts);
exports.default = router;
