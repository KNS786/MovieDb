const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const user=require('../models/user');
router.post('/',(req,res,next)=>{
   user.find({email:req.body.email})
.exec().then(user=>{

     if(user.length<1){
         return res.status(401)
      .json({message:'Auth failed'})
     }
    bcypt.compare(req.body.password,
      user[0].password,
      (err,result)=>{
       if(err){
         return res.status(401).json({
            message:'auth failed'
        })

       }
       if(result){
         const token=jwt.sign({
             userId:user[0]._id,
            firstName:user[0].firstName,
          lastName:user[0].lasetName,
          email:user[0].email,
         },
      'my_secret_key',{
           expiresIn:'1h'

      })
        return res.status(200).json({
            message:'outh successful',
            token:token

        })

        }
     res.status(401).json({
        message:'auth failed'
      })
     })
    })
    .catch(err=>{
       console.log(err);
        res.status(500).json({
           error:err
         })  

   })    
})

module.exports=router;
