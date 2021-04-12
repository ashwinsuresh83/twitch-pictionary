const express=require('express');
const router=express.Router({mergeParams:true})

router.get('/game/:twitch__name',(req,res)=>{
    res.render('main');
})

module.exports=router;