import { Request, Response } from "express";
import Project from "../models/Project.models";
import { v2 } from "cloudinary";

export var saveProject = async (req: Request|any, res: Response) => {
    const project: any = new Project();
    
    if(project){
        for(let i in req.body){
            project[i] = req.body[i];
        }
        
        if(req.file){
            const imageUpload = await v2.uploader.upload("../uploads/" + req.file.filename);
            if(!imageUpload) res.json({error: "Error al subir la imagen"});
            project.image = imageUpload.url;
            project.public_id = imageUpload.public_id;
        } else {
            res.json({
                error: "Error al recibir la imagen"
            });
        }

        if(project){
            res.json(await project.save());
        } else {
            res.json({
                error: "Error al guardar la informacion"
            })
        }
    } else {
        res.json({
            error: "Ha ocurrido un error al crear el proyecto"
        });
    }
}