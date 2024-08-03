const mongoose  = require("mongoose") ;
const config  = require("config") ;
const dbgr  = require("debug")("development:mongoose")

mongoose.connect(`${config.get("MONGODB_URI")}/scratch`)
.then(function(){
    dbgr("connected to db");
}).catch(function(err){
    dbgr(err);
})
 // conected to db tab tak print nhi hoga jab  tak ham emviroment varialbe set
// nhi karte 
