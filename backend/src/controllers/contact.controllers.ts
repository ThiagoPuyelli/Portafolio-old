import Contact from "../models/Contact.models";
import { Request, Response } from "express"; 

export var saveContact = async (req: Request, res: Response) => {
    var contact: any = new Contact();

    for(let i in req.body){
        if(req.body[i] == ""){
            res.json({error: "Error en la información"});
        } else {
            contact[i] = req.body[i];
        }
    }

    if(!contact) res.json({error: "Error al crear contacto"});

    res.json(await contact.save());
}

export var getContacts = async (req: Request, res: Response) => res.json(await Contact.find());

export var deleteContact = async (req: Request, res: Response) => res.json(await Contact.findByIdAndRemove(req.params.id));