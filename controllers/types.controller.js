const express=require("express");

const router=express.Router();

const Type=require("../models/typesModel");
const Type1=require("../models/typesModel1")


router.get("/getAllTypes" ,async(req,res)=> {


try{

const types=await Type.find({})

console.log(types)
res.send(types)

}catch(error){
    
    return res.status(400).json({message:error})
}

})


router.get("/getAllTypes1" ,async(req,res)=> {


    try{
    
    const types1=await Type1.find({})
    
    console.log(types1)
    res.send(types1)
    
    }catch(error){
        
        return res.status(400).json({message:error})
    }
    
    })





module.exports=router