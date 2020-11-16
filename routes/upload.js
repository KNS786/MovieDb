const express=require('express');
const router=express.Router();
const multer =require('multer');
const thumbnailGenerator=require('../helpers/videoThumbanil');
const port=require('../config/default').port;
const storage=multer.diskStorage({
   destination:function(req,file,cb){
         cb(null,file.originalname.replace(/ /g,'_'))
    }
});

const upload=multer({
    storage:storage, 
    limits:{
       fileSize:1025*1024*120
    }


});

router.post('/',upload.single('file'),(req,res,next)=>{(
  'http://localhost:'+port+'/api/videos'+req.file.filename.replace(/ /g,'_'),
   req.file.filename.replace(/ /g,'_'),
   req.userData.firstName
    );

   res.status(200).json({
   message:'video upload successful'
    })

})
module.exports=router;
