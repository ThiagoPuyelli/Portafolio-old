"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const project_controllers_1 = require("../controllers/project.controllers");
router.post("/project", project_controllers_1.saveProject);
exports.default = router;
