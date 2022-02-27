const mongoose = require("mongoose");

var mongoURL="mongodb+srv://Akbar:akbar660@pizza.eokxr.mongodb.net/policy";

mongoose.connect(mongoURL , {
    useUnifiedTopology:true ,
    useNewurlParser:true
});

var db=mongoose.connection

db.on("connected" , ()=>{
    console.log("Mongo DB connection success")
});

db.on("error" , ()=>{
    console.log("Mongo DB connection fail")
})

module.exports = mongoose