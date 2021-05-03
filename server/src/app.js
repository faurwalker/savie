console.log("Hello my world!")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.post('/register', (req,res) =>{
    let email = req.body.email
    let pass =  req.body.password
    console.log("You are registered!")
    res.send({
        "out" : `${email} and ${pass} are successfully registered!`
    })
})
app.listen(process.env.PORT || 8081)