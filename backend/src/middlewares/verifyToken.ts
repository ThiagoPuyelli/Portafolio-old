import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default (req: any, res: Response, next: NextFunction) => {
    const token: string|string[]|undefined = req.headers["x-access-token"];
    if(token && typeof token == "string"){
        
        const jwtPassword: string|undefined = process.env.JWT_PASSWORD;
        
        if(!jwtPassword) res.json({error: "La contraseña da error"});
 
        if(jwtPassword) {
            jwt.verify(token, jwtPassword, (err: any, decoded: any) => {
                if(err) return res.status(404).send({error: "Token inválido"});

                if(decoded){
                    req.decoded = decoded;
                    next()
                }
                
            })
        }
    } 
}