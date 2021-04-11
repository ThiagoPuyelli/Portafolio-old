import { Response, Request } from "express";
import Admin from "../models/Admin.models";
import encp from "../methods/encryptPassword";
import comp from "../methods/comparePassword";
import jwt from "jsonwebtoken";

export var registerAdmin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if(!email || !password || email == "" || password == "") res.json({error: "La información no es válida"});
    const admin: any = new Admin();
    
    if(!admin) res.json({error: "Error al crear admin"});
    
    admin.email = email;
    admin.password = await encp(password);

    const adminSave = await admin.save();
    
    if(!adminSave) res.json({error: "Error al guardar admin"});

    res.json(adminSave);
}


export var loginAdmin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    
    if(!email || !password || email == "" || password == "") {
        return res.json({error: "La información no es válida"})
    } else {
        const admin: any = await Admin.findOne({email});
    
        if(!admin) return res.json({auth: false, error: "El email es incorrecto"});
        var verifyPassword: boolean = false;
        if(admin) verifyPassword = await comp(password, admin.password);
    
        if(!verifyPassword) return res.json({auth: false, error: "La contraseña es inválida"});
        
        const jwtPassword: string|undefined = process.env.JWT_PASSWORD;
        if(!jwtPassword) return res.json({error: "Error de la contraseña de jwt"});
    
        console.log("alfredo")
        if(jwtPassword) {
            const token: string = jwt.sign({id: admin._id}, jwtPassword, {
                expiresIn: 24 * 24 * 60
            });
    
            res.json({
                auth: true,
                token
            })
        };
    }
}