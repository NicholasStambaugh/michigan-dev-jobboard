import { Binary } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;
//const ObjectId = Schema.Types.ObjectId;

const ProfileSchema = new Schema({
    username: { type: String },
    password: { type: String },
    // email: { type: String, required: true, unique: true },
    // fullName: { type: String, required: true },
});

const ProfileModel = mongoose.model("Profile", ProfileSchema)


export default ProfileModel;
