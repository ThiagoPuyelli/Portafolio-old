"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const multer_1 = __importDefault(require("../middlewares/multer"));
const project_controllers_1 = require("../controllers/project.controllers");
router.post("/project", verifyToken_1.default, multer_1.default.single("image"), project_controllers_1.saveProject);
router.get("/project", project_controllers_1.getProjects);
router.get("/project/:id", project_controllers_1.getProject);
router.delete("/project/:id", verifyToken_1.default, project_controllers_1.deleteProject);
router.put("/project/:id", verifyToken_1.default, multer_1.default.single("image"), project_controllers_1.updateProject);
exports.default = router;
