"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    github: { type: String, required: true },
    url: { type: String, required: true },
    tics: { type: [String], default: [], minLength: 1 },
    image: { type: String, required: true },
    public_id: { type: String, required: true }
});
exports.default = mongoose_1.model("Project", projectSchema);
