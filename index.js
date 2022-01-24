import express, { json } from "express";
import cors from "cors"

const app = express()
app.use(cors())
app.use(json())

const userData = []

app.post('/sign-up', (req, res) => {
    if(req.body.username && req.body.avatar) {
        userData.push(req.body)
        res.status(201).send('OK')
    } else {
        res.status(400).send('verifique se os campos estão preenchidos corretamente')
    }
})

app.listen(5000)