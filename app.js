const express=require('express')
const app=express()
const indexRoute=require('./routes/index')
const mainRoute = require('./routes/main')
const connectDB=require('./config/connection')

app.use(express.static(__dirname+"/public"))
app.set('view engine', 'ejs')

app.use(indexRoute)
app.use(mainRoute)

connectDB();
const PORT =process.env.PORT ||3000
app.listen(PORT,()=>{
    console.log("server started")
})