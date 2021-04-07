import Skill from "../models/Skill.models";
import { Request, Response } from "express";
import { v2 } from "cloudinary";

export var saveSkill = async (req: Request, res: Response) => {
    const { skill, porcent } = req.body;

    if(skill && porcent && req.file){
        var newSkill: any = new Skill();
        newSkill.skill = skill;
        newSkill.porcent = porcent;
        
        const dataFile = await v2.uploader.upload(__dirname + "/../uploads/" + req.file.filename);
        const { url, public_id } = dataFile;
        
        newSkill.icon = url;
        newSkill.public_id = public_id;

        if(!newSkill) res.json({error: "Error al crear skill"});
        
        const skillSave = await newSkill.save();
        
        if(!skillSave) res.json({error: "Error al almacenar skill"});

        res.json(skillSave);
    } else {
        res.json({
            error: "La informacion no es válida"
        });
    }
}

export var getSkills = async (req: Request, res: Response) => res.json(await Skill.find());

