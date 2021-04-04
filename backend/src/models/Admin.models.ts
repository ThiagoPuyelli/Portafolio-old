import { model, Schema } from "mongoose";

const adminSchema: Schema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true, minLength: 4}
})

export default model("Admin", adminSchema);