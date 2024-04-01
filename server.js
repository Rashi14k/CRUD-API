require('dotenv').config()
const express=require('express')
// const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
const router=require('./routes.js')
//setup server port
const port=process.env.PORT||4000;

app.use(cors())
// app.use(bodyParser.json())
app.use(express.json())


app.use(router)

//listen for request
app.listen(port,()=>console.log("server running"))