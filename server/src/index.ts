declare global {
    namespace Express {
        export interface Request {
            userId?: string;
        }
    }
}


import express from "express"
import jwt from 'jsonwebtoken'
import { ContentModel, LinkModel, UserModel } from "./db.js";
import { userMiddleware } from "./middleware.js";
import { random } from "./utils.js";
import {configDotenv} from 'dotenv'

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
        userId: req.userId
    })
    res.json({
        message: "Deleted"
    })

})

app.post('/api/v1/brain/share', userMiddleware, async(req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await LinkModel.findOne({
            userId: req.userId
        })

        if (existingLink) {
            res.json({
                hash: "/share/"+existingLink.hash
            })
            return 
        }else{
            const hash = random(10);
            await LinkModel.create({
                userId: req.userId,
                hash: hash
            })
            res.json({
                message: "/share/" + hash
            })
        }
    } else {
        await LinkModel.deleteOne({
            userId: req.userId,
        })
        res.json({
            message: "remove link"
        })
    }

})

app.get('/api/v1/brain/:shareLink', async (req, res) => {
    const hash = req.params.shareLink;
    const link = await LinkModel.findOne({
        hash
    });

    if (!link) {
        res.status(411).json({
            message: 'Sorry incorrect input'
        })
        return;
    }

    //userId
    const content = await ContentModel.find({
        userId: link.userId
    })
    const user = await UserModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: 'user isnt found,error should not reach here'
        })
        return;
    }
    //we user?.username use this optional chaining if the user is null its safe  for that 
    //in case of not using if block to catch  it

    res.json({
        username: user.username,
        content: content
    })
})

app.listen('8080', () => {
    console.log("app running on http://localhost:8080");
})

