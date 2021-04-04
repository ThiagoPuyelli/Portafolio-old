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
            const imageUpload = await v2.uploader.upload(__dirname + "/../uploads/" + req.file.filename);
            if(!imageUpload) res.json({error: "Error al subir la imagen"});
            project.image = imageUpload.url;
            project.public_id = imageUpload.public_id;
        } else {
            res.json({
                error: "Error al recibir la imagen"
            });
        }

        if(project){
            const projectSave = await project.save();
            if(projectSave){
                res.json(projectSave);
            } else {
                res.json({
                    error: "Error al guardar la info"
                })
            }
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

export var getProjects = async (req: Request, res: Response) => res.json(await Project.find());

export var getProject = async (req: Request, res: Response) => res.json(await Project.findById(req.params.id));

export var deleteProject = async (req: Request, res: Response) => {
    const project: any = await Project.findById(req.params.id);

    if(project){
        const imageDelete = await v2.uploader.destroy(project.public_id);
        if(imageDelete) {
            const projectDelete = await Project.findByIdAndRemove(project._id);
            if(projectDelete){
                res.json("Proyecto eliminado con éxito");
            } else {
                res.json({
                    error: "Error al eliminar el proyecto"
                });
            }
        } else {
            res.json({error: "Error al eliminar la imagen"})
        }
    } else {
        res.json({error: "El id no es válido"});
    }
}

export var updateProject = async (req: Request, res: Response) => {
    const project: any = await Project.findById(req.params.id);

    if(project){
        if(req.file){
            const imageDelete = await v2.uploader.destroy(project.public_id);
            if(!imageDelete) res.json({error: "Error al eliminar la imagen anterior"});
            const imageUpload = await v2.uploader.upload(__dirname + "/../uploads/" + req.file.filename);
            if(!imageUpload) res.json({error: "Error al guardar la nueva imagen"});
            project.image = imageUpload.url;
            project.public_id = imageUpload.public_id;
        }

        for(let i in req.body){
            project[i] = req.body[i];
        }

        if(!project) res.json({error: "Error al modificar proyecto"});

        const projectUpdate = await Project.findByIdAndUpdate(project._id, project, {new: true});

        if(!projectUpdate) res.json({error: "Error al actualizar proyecto"});

        res.json(projectUpdate);

    } else {
        res.json({
            error: "El id no es válido"
        });
    }
}