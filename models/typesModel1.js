const mongoose = require("mongoose");

const typesSchema1 = mongoose.Schema({

    image:{ type: String, require },
    planname:{ type: String, require },
    cashless_hospital:{ type: String, require },
    monthly_premium:{ type: String, require },
    annually_premium:{ type: String, require } ,
    cover:{ type: String, require }
});



const typesModel1=mongoose.model("types1" ,typesSchema1)

module.exports = typesModel1