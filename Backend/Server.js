require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const helmet = require("helmet")
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit')

const PORT = process.env.PORT || 3000;

   

const loginlimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10, // Limit each IP to 5 login requests per windowMs
    message: "Too many login attempts from this IP, please try again after 15 minutes"
})



// Application level middlwerse
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(helmet())
app.use(cors())
app.use(loginlimiter)
app.use(cookieParser())


// Database connection

mongoose.connect("mongodb+srv://shaminmuhammad116:TYEM12345@cluster0.bdh035i.mongodb.net/TYEMProject?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connected to MongoDb');
}).catch((err)=>{
    console.log('Error connceting to MongoDb:',err.message)
})
  
mongoose.connection.on('disconnected',()=>{
    console.log('MongoDb connection disconnected');
})




app.listen(PORT, ()=>{
    console.log('Server is Runing in port 3000');
})   