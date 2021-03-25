const express=require('express')
const app=express()
const indexRoute=require('./routes/index')


app.use(express.static(__dirname+"/public"))
app.set('view engine', 'ejs')

app.use(indexRoute)

const PORT =process.env.PORT ||3000
app.listen(PORT,()=>{
    console.log("server started")
})