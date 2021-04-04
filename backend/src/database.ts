import mongoose from "mongoose";

const uri: string|undefined = process.env.DATABASE_URI;

if(uri) mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(server => console.log("Database is connect"))
.catch(err => console.log(err));