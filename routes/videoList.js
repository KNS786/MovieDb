const express=require('express');
const Router=express.Router();

const videoDetails =require('..models/videoDetailsSchema');

Router.get('/',(req,res,next)=>{
      videoDetails.find().exec().then(docs=>{
       res.status(200).json(docs);
     })
   .catch(err=>{
     res.status(500).json({
      error:err   
    })
})
});
module.exports=Router;
