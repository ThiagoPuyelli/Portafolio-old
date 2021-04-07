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
exports.getSkills = exports.saveSkill = void 0;
const Skill_models_1 = __importDefault(require("../models/Skill.models"));
const cloudinary_1 = require("cloudinary");
var saveSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { skill, porcent } = req.body;
    if (skill && porcent && req.file) {
        var newSkill = new Skill_models_1.default();
        newSkill.skill = skill;
        newSkill.porcent = porcent;
        const dataFile = yield cloudinary_1.v2.uploader.upload(__dirname + "/../uploads/" + req.file.filename);
        const { url, public_id } = dataFile;
        newSkill.icon = url;
        newSkill.public_id = public_id;
        if (!newSkill)
            res.json({ error: "Error al crear skill" });
        const skillSave = yield newSkill.save();
        if (!skillSave)
            res.json({ error: "Error al almacenar skill" });
        res.json(skillSave);
    }
    else {
        res.json({
            error: "La informacion no es válida"
        });
    }
});
exports.saveSkill = saveSkill;
var getSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.json(yield Skill_models_1.default.find()); });
exports.getSkills = getSkills;
