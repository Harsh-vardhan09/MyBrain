import mongoose, { model, Schema } from "mongoose";
import {configDotenv} from 'dotenv'

mongoose.connect(process.env.MONGODB_URI!)
    .then(() => console.log('Connected!')).catch((err) => {
        console.log(err);
    })

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
})

const ContentSchema=new Schema({
    title:String,
    link:String,
    tag:[{
        type:mongoose.Types.ObjectId,
        ref:'Tag'
    }],
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,
    },

})

const LinkSchema=new Schema({
    hash:String,
    userId:{
        type:mongoose.Types.ObjectId,ref:'User',required:true,unique:true
    },
})

export const UserModel = model('User', UserSchema);
export const ContentModel=model('Content',ContentSchema)
export const LinkModel = model('Link', LinkSchema);
