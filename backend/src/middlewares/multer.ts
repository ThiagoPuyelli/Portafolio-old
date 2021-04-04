import multer from "multer";
import genID from "../methods/generateID";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/../uploads");
    },
    filename: async (req, file, cb) => {
        const { originalname } = file;

        if(originalname){
            var fileExt: string|Array<string> = originalname.split(".");
            fileExt = fileExt[fileExt.length - 1];
            const id: string = await genID();
            cb(null, id + "." + fileExt);
        }
    } 
})

export default multer({
    storage,
    fileFilter: (req, file, next) => {
        const image = file.mimetype.startsWith("image/");
        if(image){
            next(null, true);
        } else {
            next(null, false);
        }
    }
})