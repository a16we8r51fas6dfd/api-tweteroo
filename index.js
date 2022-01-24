import express, { json } from "express";
import cors from "cors"

const app = express()
app.use(cors())
app.use(json())

const userData = []
const tweets = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
	}
]

app.post('/sign-up', (req, res) => {
    if(req.body.username && req.body.avatar) {
        userData.push(req.body)
        res.status(201).send('OK')
    } else {
        res.status(400).send('verifique se os campos estão preenchidos corretamente')
    }
})

app.get('/tweets', (req, res) => {
    res.send(tweets.slice(Math.max(tweets.length - 10, 0)))
})

app.listen(5000)