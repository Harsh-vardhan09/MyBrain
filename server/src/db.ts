import mongoose, { model, Schema } from "mongoose";


mongoose.connect('mongodb://127.0.0.1:27017/brainly')
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

export const UserModel = model('User', UserSchema);
export const ContentModel=model('Content',ContentSchema)