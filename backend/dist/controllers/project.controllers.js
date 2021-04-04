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
exports.updateProject = exports.deleteProject = exports.getProject = exports.getProjects = exports.saveProject = void 0;
const Project_models_1 = __importDefault(require("../models/Project.models"));
const cloudinary_1 = require("cloudinary");
var saveProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = new Project_models_1.default();
    if (project) {
        for (let i in req.body) {
            project[i] = req.body[i];
        }
        if (req.file) {
            const imageUpload = yield cloudinary_1.v2.uploader.upload(__dirname + "/../uploads/" + req.file.filename);
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
            const projectSave = yield project.save();
            if (projectSave) {
                res.json(projectSave);
            }
            else {
                res.json({
                    error: "Error al guardar la info"
                });
            }
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
var getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.json(yield Project_models_1.default.find()); });
exports.getProjects = getProjects;
var getProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.json(yield Project_models_1.default.findById(req.params.id)); });
exports.getProject = getProject;
var deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield Project_models_1.default.findById(req.params.id);
    if (project) {
        const imageDelete = yield cloudinary_1.v2.uploader.destroy(project.public_id);
        if (imageDelete) {
            const projectDelete = yield Project_models_1.default.findByIdAndRemove(project._id);
            if (projectDelete) {
                res.json("Proyecto eliminado con éxito");
            }
            else {
                res.json({
                    error: "Error al eliminar el proyecto"
                });
            }
        }
        else {
            res.json({ error: "Error al eliminar la imagen" });
        }
    }
    else {
        res.json({ error: "El id no es válido" });
    }
});
exports.deleteProject = deleteProject;
var updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield Project_models_1.default.findById(req.params.id);
    if (project) {
        if (req.file) {
            const imageDelete = yield cloudinary_1.v2.uploader.destroy(project.public_id);
            if (!imageDelete)
                res.json({ error: "Error al eliminar la imagen anterior" });
            const imageUpload = yield cloudinary_1.v2.uploader.upload(__dirname + "/../uploads/" + req.file.filename);
            if (!imageUpload)
                res.json({ error: "Error al guardar la nueva imagen" });
            project.image = imageUpload.url;
            project.public_id = imageUpload.public_id;
        }
        for (let i in req.body) {
            project[i] = req.body[i];
        }
        if (!project)
            res.json({ error: "Error al modificar proyecto" });
        const projectUpdate = yield Project_models_1.default.findByIdAndUpdate(project._id, project, { new: true });
        if (!projectUpdate)
            res.json({ error: "Error al actualizar proyecto" });
        res.json(projectUpdate);
    }
    else {
        res.json({
            error: "El id no es válido"
        });
    }
});
exports.updateProject = updateProject;
