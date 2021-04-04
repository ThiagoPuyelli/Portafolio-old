"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./app"));
const cloudinary_1 = __importDefault(require("./cloudinary"));
require("./database");
cloudinary_1.default();
const server = app_1.default(express_1.default());
server.listen(server.get("port"), console.log(`Server on port ${server.get("port")}`));
