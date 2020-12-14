const express = require('express')
const cors = require('cors');
const app = express();
const userRouter = require('./routes/User')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const config = require('./config/config').get(process.env.NODE_ENV);
const path = require('path')

//mongoose config

const uri = 'mongodb://localhost:27017/globewick'
mongoose.connect(config.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(()=>{
  console.log('connect to database')
}).catch(()=>{
  console.log('error connecting to database')
})
// use Middleware
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }




app.use(cookieParser())
app.use(cors(corsOptions))
// for parsing application/json
app.use(bodyParser.json());


// for parsing application/xwww- form data
app.use(bodyParser.urlencoded({ extended: true })); 

// if(process.env.NODE_ENV=="production"){
  if(true){
  //set static folder
  app.use(express.static(path.join(__dirname, './frontend/build')))

  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./frontend","build","index.html"));
  })
  
}


app.use('/user',userRouter)

app.listen(3008,()=>{
    console.log('Server is started at port 3008')
})
;