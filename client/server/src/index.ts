import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import ProfileModel from "./models/profile";
import { config } from 'dotenv';
import cors from 'cors';
// import CompanyModel from "./models/company";

config();

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());


//profiles (login)
app.get('/profile',async (req: Request, res: Response) => {
    const profiles = await ProfileModel.find();
    res.json(profiles);
});

app.post('/profile', async (req: Request, res: Response) => {
    console.log(req.body);

    const newProfile = new ProfileModel({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    const createdProfile = await newProfile.save();
    res.json(createdProfile);
});

app.delete('/profile/:profileId', async (req: Request, res: Response) => {
            const profileId = req.params.profileId;
           const deletedprofile = await ProfileModel.findByIdAndDelete(profileId);
            res.json(deletedprofile);
});

//company profiles (login)
// app.get('/company',async (req: Request, res: Response) => {
//     const company= await CompanyModel.find();
//     res.json(company);
// });

// app.post('/company', async (req: Request, res: Response) => {
//     console.log(req.body);

//     const newCompany = new CompanyModel({
//         username: req.body.username,
//         password: req.body.password,
//         email: req.body.email,

//     });
//     const createdCompany = await newCompany.save();
//     res.json(createdCompany);
// });


mongoose.connect(process.env.MONGO_URL!).then(() => {
        console.log(`Working on port ${PORT}`)
        app.listen(PORT);
    });    