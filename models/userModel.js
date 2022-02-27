const mongoose=require("mongoose");

const userSchema=mongoose.Schema(
    {
        value:{type:String,required:true}
    },
    {
        timestamps:true,
    }
)

module.exports=mongoose.model("users",userSchema)