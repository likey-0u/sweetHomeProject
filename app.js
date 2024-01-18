const express = require( "express" );
const mongoose = require("mongoose");
require('dotenv').config();    //env파일을 사용하기 위해
const cors = require("cors");  //모든주소에서 프론트엔드가 접근할 수 있게 하기 위해
const app = express();
app.use(cors());               //모든주소에서 프론트엔드가 접근할 수 있게 하기 위해

mongoose.connect(process.env.DB, {
}).then(()=>console.log("connected to database"));


module.exprots = app;

//20240118 19
 