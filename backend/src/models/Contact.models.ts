import { model, Schema } from "mongoose";

const contactSchema: Schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true}
})

export default model("Contact", contactSchema);