import About from "../models/About.models";
import { Request, Response } from "express";

export var addAbout = async (req: Request, res: Response) => {
    const { title, description } = req.body;

    if(title && description && title != "" && description != ""){
        const about: any = new About();
        
        about.title = title;
        about.description = description;

        res.json(await about.save());

    } else {
        res.json({
            error: "La información no es válida"
        });
    }

}

export var updateAbout = async (req: Request, res: Response) => res.json(await About.findByIdAndUpdate(req.params.id, {...req.body}, {new: true}));

export var deleteAbout = async (req: Request, res: Response) => res.json(await About.findByIdAndRemove(req.params.id));

export var getAbouts = async (req: Request, res: Response) => res.json(await About.find());