import { model, Schema } from "mongoose";

const aboutSchema: Schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}
})

export default model("About", aboutSchema);