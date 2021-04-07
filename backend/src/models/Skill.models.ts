import { model, Schema } from "mongoose";

const skilSchema: Schema = new Schema({
    skill: {type: String, required: true},
    porcent: {type: Number, required: true, min: 0, max: 100},
    icon: {type: String, required: true},
    public_id: {type: String, required: true}
})

export default model("Skill", skilSchema);