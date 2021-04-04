import dotenv from "dotenv";
dotenv.config();
import express from "express";
import app from "./app";
import cloudConfig from "./cloudinary";
require("./database");
cloudConfig();

const server = app(express());

server.listen(server.get("port"), console.log(`Server on port ${server.get("port")}`));
