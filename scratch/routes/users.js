const mongoose  = require("mongoose") ;

mongoose.connect("mongodb://127.0.0.1:27017/scratch") ; 

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  cart: {
    type: Array,
    default: []
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  orders:{
    type: Array  , 
  },
  contact: {
   type : Number
  },
  picture: {
    type: String,
   
  }
});

module.exports  = mongoose.model("user" ,userSchema) ; 

