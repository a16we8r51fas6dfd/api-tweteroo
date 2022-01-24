import express, { json } from "express";
import cors from "cors"

const app = express()
app.use(cors())
app.use(json())

const userData = []
const tweets = []

app.post('/sign-up', (req, res) => {
    if(req.body.username && req.body.avatar) {
        userData.push(req.body)
        res.status(201).send('OK')
    } else {
        res.status(400).send('Todos os campos são oborigatórios!')
    }
})

app.post('/tweets', (req, res) => {
    if(req.body.username && req.body.tweet) {
        const user = userData.find(user => user.username === req.body.username)
        const tweet = {
            username: user.username, 
            avatar: user.avatar, 
            tweet: req.body.tweet
        }
        tweets.push(tweet)
        res.status(201).send('OK')
    } else {
        res.status(400).send('Todos os campos são obrigatórios')
    }
})

app.get('/tweets', (req, res) => {
    res.send(tweets.slice(Math.max(tweets.length - 10, 0)))
})

app.listen(5000)