import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import mongoose from "mongoose";
import User from "./Models/user.js";
import userData from "./Data/raw.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/* MOONGOOSE SETUP */

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => {
    app.listen(PORT,() => console.log(`Server Port: ${PORT}`))

    /*Add Data One Time */
    User.insertMany(userData);
   
    console.log("Data Imported successfully");

}).catch((error) => console.log(`${error} did not connect`));

