"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var adminSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true, minLength: 4 }
});
exports.default = mongoose_1.model("Admin", adminSchema);
