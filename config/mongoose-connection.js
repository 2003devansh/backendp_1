const mongoose  = require("mongoose") ;
const config  = require("config") ;


const dbr  = require("debug")("development:mongoose")

mongoose.connect(`${config.get("MONGODB_URI")}/`)
.then(function(){
    dbr("connected to db");
}).catch(function(err){
    dbr(err);
})

// conected to db tab tak print nhi hoga jab  tak ham emviroment varialbe set
// nhi karte 
