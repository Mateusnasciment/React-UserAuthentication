/// MERN= Mongo + Express  + REACT + node
//development +nodejs,sercver + react server
///prudcction nodejs + static react files 
//// user authentaction
//////// e-express
const express = require('express')
const app = express()
const cors = require('cors')
const { default: mongoose } = require('mongoose')

app.use(cors())
app.use(express.json())
app.use(mongoose)

mongoose.connect('mongodb://localhost:27017/full-mern-stack-video')

app.post('/api/login', async  (req, res) => {
    console.log(req.body)

        const user = await user.findOne ({ 
                email: req.body.email,
                password: req.body.password,
        })
    if (user) {
        return res.json({ status: 'ok', user: true })
    }else {
        return res.json({ status: 'error', user: false })
    }

})
app.post('/api/register', async  (req, res) => {
    console.log(req.body)
        try {
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', erro: 'e-mail duplicado' })
    }
})


app.listen(1337, (req, res) => {
    console.log('server started on 1337')
}) 



