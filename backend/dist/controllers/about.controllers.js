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
exports.getAbout = exports.getAbouts = exports.deleteAbout = exports.updateAbout = exports.addAbout = void 0;
const About_models_1 = __importDefault(require("../models/About.models"));
var addAbout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    if (title && description && title != "" && description != "") {
        const about = new About_models_1.default();
        about.title = title;
        about.description = description;
        res.json(yield about.save());
    }
    else {
        res.json({
            error: "La información no es válida"
        });
    }
});
exports.addAbout = addAbout;
var updateAbout = (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.json(yield About_models_1.default.findByIdAndUpdate(req.params.id, Object.assign({}, req.body), { new: true })); });
exports.updateAbout = updateAbout;
var deleteAbout = (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.json(yield About_models_1.default.findByIdAndRemove(req.params.id)); });
exports.deleteAbout = deleteAbout;
var getAbouts = (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.json(yield About_models_1.default.find()); });
exports.getAbouts = getAbouts;
var getAbout = (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.json(yield About_models_1.default.findById(req.params.id)); });
exports.getAbout = getAbout;
