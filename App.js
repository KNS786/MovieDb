const app=require('express')();
const morgan=require('morgan');
const body_parser=require('body-parser');
const cors=require('cors')
const mongoose=require('mongoose');
const Oauth=require('./middleware/Oauth');

mongoose.connect(
  'mongodb://localhost:7000/videocatcher',
  ({ useCreateIndex:true,
      useNewUrlParser:true,
       useUnifiedTopology:true
  })
)

mongoose.Promise=global.Promise;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use('/api/videos',express.static('media/uploads'));
/*Routing*/
app.use('/api/signIn',require('./routes/signIn'));
app.use('/api/signUp',require('routes/signUp'));
app.use('/api/upload',Oauth,require('./routes/upload'));
app.use('/api/videoList',Oauth,require('./routes/videoList'))


module.exports=app;
