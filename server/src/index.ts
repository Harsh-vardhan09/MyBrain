declare global {
    namespace Express {
        export interface Request {
            userId?: string;
        }
    }
}


import express from "express"
import jwt from 'jsonwebtoken'
import { ContentModel, UserModel } from "./db.js";
import { userMiddleware } from "./middleware.js";

const app = express();
app.use(express.json());


const JWT_PASSWORD = "12345";

app.post('/api/v1/signup', async (req, res) => {
    //zod validation
    const username = req.body.username;
    const password = req.body.password;
    try {
        await UserModel.create({
            username: username,
            password: password
        })

        res.json({
            message: "user signed up"
        })
    } catch (error) {
        res.status(411).json({ message: "user already exist" })
    }
})

app.post('/api/v1/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)
        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "incorrect credentials"
        })
    }
})

app.post('/api/v1/content', userMiddleware, async (req, res) => {
    const link = req.body.link;
    const title = req.body.title;
    await ContentModel.create({
        link,
        title,
        //@ts-ignore
        userId: req.userId,
        tag: []
    })
    return res.json({
        message: "content added"
    })

})

app.get('/api/v1/content', userMiddleware, async (req, res) => {

    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username");
    res.json({
        content
    })
})

app.delete('/api/v1/content', async (req, res) => {
    const contentId = req.body.contentId;
    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })
    res.json({
        message: "Deleted"
    })

})

app.post('/api/v1/brain/share', (req, res) => {

})

app.get('/api/v1/brain/:shareLink', (req, res) => {

})

app.listen('8080', () => {
    console.log("app running on 8080");

})

//46 min left 