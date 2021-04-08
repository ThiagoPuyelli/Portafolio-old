import Skill from "../models/Skill.models";
import { Request, Response } from "express";
import { v2 } from "cloudinary";
import fs from "fs";

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

        await fs.unlinkSync(__dirname + "/../uploads/" + req.file.filename);

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

export var updateSkill = async (req: Request, res: Response) => {
    const skill: any = await Skill.findById(req.params.id);
   
    if(!skill) res.json({error: "La skill no es válida"});
    
    if(req.file){
        const deleteImage = await v2.uploader.destroy(skill.public_id);
        if(!deleteImage) res.json({error: "Error al eliminar imagen anterior"});

        const updateImage = await v2.uploader.upload(__dirname + "/../uploads/" + req.file.filename);
        if(!updateImage) res.json({error: "Error al almacenar imagen anterior"});

        skill.icon = updateImage.url;
        skill.public_id = updateImage.public_id;

        await fs.unlinkSync(__dirname + "/../uploads/" + req.file.filename);
    }

    for(let i in req.body){
        skill[i] = req.body[i];
    }

    res.json(await Skill.findByIdAndUpdate(skill._id, skill, {new: true}));

}

export var deleteSkill = async (req: Request, res: Response) => {
    const skill: any = await Skill.findById(req.params.id);
    if(!skill) res.json({error: "Error no se encuentra la skill"});

    const deleteImage = await v2.uploader.destroy(skill.public_id);
    if(!deleteImage) res.json({error: "Error al eliminar la imagen"});

    const deleteSkill = await Skill.findByIdAndRemove(skill._id);
    if(!deleteSkill) res.json({error: "Error al eliminar skill"});

    res.json("Skill eliminado con éxito");

}