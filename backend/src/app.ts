import express, { NextFunction, Response, Request } from "express";
import morgan from "morgan";
import projectRoutes from "./routes/project.routes";
import adminRoutes from "./routes/admin.routes";

export default (app: any) => {
    
    // Port
    app.set("port", process.env.PORT || 6000);

    // Middlewares
    
    app.use(morgan("dev"));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    // Cors 

    app.use((req: Request, res: Response, next: NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });

    // Routes

    app.use(projectRoutes);
    app.use(adminRoutes);

    // Return

    return app;

}