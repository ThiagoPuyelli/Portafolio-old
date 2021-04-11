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
exports.loginAdmin = exports.registerAdmin = void 0;
const Admin_models_1 = __importDefault(require("../models/Admin.models"));
const encryptPassword_1 = __importDefault(require("../methods/encryptPassword"));
const comparePassword_1 = __importDefault(require("../methods/comparePassword"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var registerAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password || email == "" || password == "")
        res.json({ error: "La información no es válida" });
    const admin = new Admin_models_1.default();
    if (!admin)
        res.json({ error: "Error al crear admin" });
    admin.email = email;
    admin.password = yield encryptPassword_1.default(password);
    const adminSave = yield admin.save();
    if (!adminSave)
        res.json({ error: "Error al guardar admin" });
    res.json(adminSave);
});
exports.registerAdmin = registerAdmin;
var loginAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password || email == "" || password == "") {
        return res.json({ error: "La información no es válida" });
    }
    else {
        const admin = yield Admin_models_1.default.findOne({ email });
        if (!admin)
            return res.json({ auth: false, error: "El email es incorrecto" });
        var verifyPassword = false;
        if (admin)
            verifyPassword = yield comparePassword_1.default(password, admin.password);
        if (!verifyPassword)
            return res.json({ auth: false, error: "La contraseña es inválida" });
        const jwtPassword = process.env.JWT_PASSWORD;
        if (!jwtPassword)
            return res.json({ error: "Error de la contraseña de jwt" });
        console.log("alfredo");
        if (jwtPassword) {
            const token = jsonwebtoken_1.default.sign({ id: admin._id }, jwtPassword, {
                expiresIn: 24 * 24 * 60
            });
            res.json({
                auth: true,
                token
            });
        }
        ;
    }
});
exports.loginAdmin = loginAdmin;
