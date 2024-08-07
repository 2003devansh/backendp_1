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
        return res.status(503).send("ypu don't have the authority ")
       }
      let {fullName , email , password}   = req.body ;
      let createdOwner  = await ownerModel.create({
        fullName ,
        email ,
        password 
      })


      res.status(201).send(createdOwner) ; 
    })
}
// jab tak hamara node ka envioment developpmentmai set hai tab tal yeh route chalega
module.exports = router  ;