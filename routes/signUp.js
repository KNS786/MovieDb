const express=require('express');
const Router =express.Router();
const mongoose=require('mongoose');
const user =require('../models/user');
const bcrypt=require('bcrypt');


Router.post('/',(req,res,next)=>{
    console.log(req.body);
    user.find({email:req.body.email})
      .exec().then(user=>{
            if(user.length>=1){
             return res.status(403).json({
              message:'user already exist' 
      })
    
        }else{
            bcrypt.hash(req.body.passsword,10);

     }    
       }).catch();
})
module.exports=Router;
