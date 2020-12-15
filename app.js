const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/User");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const config = require("./config/config").get(process.env.NODE_ENV);
const path = require("path");

//mongoose config

const uri = "mongodb://localhost:27017/globewick";
mongoose
  .connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connect to database");
  })
  .catch(() => {
    console.log("error connecting to database");
  });
// use Middleware
var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

var corsOptions_prod = {
  origin: "https://globewick.herokuapp.com",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

if(process.env.NODE_ENV=="production"){
  app.use(cors(corsOptions_prod));
}else{
  app.use(cors(corsOptions));
}



app.use(cookieParser());
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww- form data
app.use(bodyParser.urlencoded({ extended: true }));

if(process.env.NODE_ENV=="production"){
  //set static folder
  app.use(express.static(path.join(__dirname, "./frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./frontend", "build", "index.html"));
  });
}
app.get("/testapi",(req,res)=>{
  console.log('in backend api testapi');
  res.json({
    success:false,
    message:'in testapi in backend created at 15:18pm ,15 dec'
  })
})
app.use("/user", userRouter);
const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log("Server is started at port 3008");
});
