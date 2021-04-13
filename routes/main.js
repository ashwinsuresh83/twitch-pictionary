const express=require('express');
const router=express.Router({mergeParams:true})

router.get('/game/:twitch__name',(req,res)=>{
    const twitch__name=req.params.twitch__name
    res.render('main',{twitch__name:twitch__name});
})

module.exports=router;