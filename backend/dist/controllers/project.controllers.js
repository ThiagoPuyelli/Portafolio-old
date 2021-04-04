"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveProject = void 0;
const Project_models_1 = __importDefault(require("../models/Project.models"));
const cloudinary_1 = require("cloudinary");
var saveProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = new Project_models_1.default();
    if (project) {
        for (let i in req.body) {
            project[i] = req.body[i];
        }
        if (req.file) {
            const imageUpload = yield cloudinary_1.v2.uploader.upload("../uploads/" + req.file.filename);
            if (!imageUpload)
                res.json({ error: "Error al subir la imagen" });
            project.image = imageUpload.url;
            project.public_id = imageUpload.public_id;
        }
        else {
            res.json({
                error: "Error al recibir la imagen"
            });
        }
        if (project) {
            res.json(yield project.save());
        }
        else {
            res.json({
                error: "Error al guardar la informacion"
            });
        }
    }
    else {
        res.json({
            error: "Ha ocurrido un error al crear el proyecto"
        });
    }
});
exports.saveProject = saveProject;
