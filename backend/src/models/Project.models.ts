import { model, Schema } from "mongoose";

const projectSchema: Schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    github: {type: String, required: true},
    url: {type: String, required: true},
    tics: {type: [String], default: [], minLength: 1},
    image: {type: String, required: true},
    public_id: {type: String, required: true}
}) 

export default model("Project", projectSchema);