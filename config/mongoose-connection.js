const mongoose  = require("mongoose") ;

const dbr  = require("debug")("development:mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/scatch")
.then(function(){
    dbr("connected to db");
}).catch(function(err){
    console.log(err);
})