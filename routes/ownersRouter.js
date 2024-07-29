const express  = require("express") ;
const router   = express.Router() ;
const ownerModel = require("../models/owner-model")

console.log(process.env.NODE_ENV);


router.get("/" , function(req,res){
    res.send("hey");
}) ;

if(process.env.NODE_ENV === "development"){
    router.post("/create" , (req,res)=>{
        res.send("heyy its working")
    })
}
// jab tak hamara node ka envioment developpmentmai set hai tab tal yeh route chalega
module.exports = router  ;