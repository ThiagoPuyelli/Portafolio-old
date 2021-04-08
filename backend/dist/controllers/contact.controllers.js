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
exports.deleteContact = exports.getContacts = exports.saveContact = void 0;
const Contact_models_1 = __importDefault(require("../models/Contact.models"));
var saveContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var contact = new Contact_models_1.default();
    for (let i in req.body) {
        if (req.body[i] == "") {
            res.json({ error: "Error en la información" });
        }
        else {
            contact[i] = req.body[i];
        }
    }
    if (!contact)
        res.json({ error: "Error al crear contacto" });
    res.json(yield contact.save());
});
exports.saveContact = saveContact;
var getContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.json(yield Contact_models_1.default.find()); });
exports.getContacts = getContacts;
var deleteContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.json(yield Contact_models_1.default.findByIdAndRemove(req.params.id)); });
exports.deleteContact = deleteContact;
