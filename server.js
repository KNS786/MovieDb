const http=require('http');
const app =require('./App');
const config=require('./config/default');
const portNo=config.port;

const server=http.createServer(app);
server.listen(portNo,()=>{
   console.log("server Runnig successfully on port No : ",portNo)
});


