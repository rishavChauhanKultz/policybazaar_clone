const express=require("express");
const cors = require('cors');

const userController=require("./controllers/user.controller")
const typeController=require("./controllers/types.controller")
const type1Controller=require("./controllers/types.controller")

const app=express();
const db=require("./db")
app.use(express.json());


app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });

app.get("/", (req,res)=>{
    res.send("serverworking")
})


app.use("api/users/",userController)
app.use("api/types/",typeController)
app.use("/api/types1/",type1Controller)


if(process.env.NODE_ENV == "production"){
    app.use(express.static("polybazaar/build"))
}


const port=process.env.PORT;
app.listen(port,()=>"serverrunning at port 8000")