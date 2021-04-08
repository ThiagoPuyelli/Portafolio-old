"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const aboutSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});
exports.default = mongoose_1.model("About", aboutSchema);
