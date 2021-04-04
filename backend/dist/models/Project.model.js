"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var projectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    github: { type: String, required: true },
    url: { type: String, required: true },
    tics: { type: [String], default: [], minLength: 1 }
});
exports.default = mongoose_1.model("Project", projectSchema);
