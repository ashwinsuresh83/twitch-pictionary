const mongoose=require('mongoose');
const def=require('./default.json')
const URI=def.URI

const connectDB=async()=>{
    try{
        await mongoose.connect(URI , {
        useCreateIndex: true,
        useNewUrlParser : true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        
    })
    console.log('db connected')
    }
    catch(err){
        console.log(err.message)
        console.log(URI);
    }
    
}
module.exports=connectDB