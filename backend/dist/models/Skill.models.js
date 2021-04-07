"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const skilSchema = new mongoose_1.Schema({
    skill: { type: String, required: true },
    porcent: { type: Number, required: true, min: 0, max: 100 },
    icon: { type: String, required: true },
    public_id: { type: String, required: true }
});
exports.default = mongoose_1.model("Skill", skilSchema);
