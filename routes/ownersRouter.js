const express  = require("express") ;
const router   = express.Router() ;
const ownerModel = require("../models/owner-model")

console.log(process.env.NODE_ENV);


router.get("/" , function(req,res){
    res.send("heyoi");
}) ;

if(process.env.NODE_ENV === "development"){
    router.post("/create" , async (req,res)=>{
       let owners  = await ownerModel.find() ;
       if(owners.length > 0 ){
        return res.send(503).send("ypu don't have the authority ")
       }
       res.send("we can create owner")
    })
}
// jab tak hamara node ka envioment developpmentmai set hai tab tal yeh route chalega
module.exports = router  ;