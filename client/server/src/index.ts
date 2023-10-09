import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import ProfileModel from "./models/profile";
import { config } from 'dotenv';

config();

const PORT = 5000;

const app = express();

app.use(express.json());

app.post('/profile', async (req: Request, res: Response) => {
    console.log(req.body);

    const newProfile = new ProfileModel({
        username: req.body.username
    });
    const createdProfile = await newProfile.save();
    res.json(createdProfile);
});


mongoose.connect(process.env.MONGO_URL!).then(() => {
        console.log(`Working on port ${PORT}`)
        app.listen(PORT);
    });