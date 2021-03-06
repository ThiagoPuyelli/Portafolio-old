"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const project_routes_1 = __importDefault(require("./routes/project.routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const skill_routes_1 = __importDefault(require("./routes/skill.routes"));
const contact_routes_1 = __importDefault(require("./routes/contact.routes"));
const about_routes_1 = __importDefault(require("./routes/about.routes"));
exports.default = (app) => {
    // Port
    app.set("port", process.env.PORT || 7000);
    // Middlewares
    app.use(morgan_1.default("dev"));
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    // Cors 
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });
    // Routes
    app.use(project_routes_1.default);
    app.use(admin_routes_1.default);
    app.use(skill_routes_1.default);
    app.use(contact_routes_1.default);
    app.use(about_routes_1.default);
    // Return
    return app;
};
