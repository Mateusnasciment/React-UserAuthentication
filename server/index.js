/// MERN= Mongo + Express  + REACT + node
//development +nodejs,sercver + react server
///prudcction nodejs + static react files 
//// user authentaction
//////// e-express
const express = require('express')
const app = express()
/**
 * app.get para hello 
 */
app.get('/hello', (req, res) => {
    res.send("testando")    
})


app.listen(3333, (req, res) => {
    console.log('server iniciado na porta taltal')
}) 

/** */