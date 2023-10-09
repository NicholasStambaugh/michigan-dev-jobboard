import { Binary } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;
//const ObjectId = Schema.Types.ObjectId;

const ProfileSchema = new Schema({
    username: String,
    password: String
});

const ProfileModel = mongoose.model("Profile", ProfileSchema)


export default ProfileModel;
