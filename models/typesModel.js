const mongoose = require("mongoose");

const typesSchema = mongoose.Schema({

  brandLogo: { type: String, require },
  brandName: { type: String, require },
  hrLogo: { type: String, require },
  policyValue: { type: String, require },
  policyAge: { type: String, require },
  SettlmentPercentage: { type: String, require },
  savingUpTo: { type: String, require },
  montlyPrice: { type: String, require },
  showMore1: { type: String, require },
  showMore1a: { type: String, require },
  showMore2: { type: String, require },
  showMore2a: { type: String, require },
  showMore3: { type: String, require },
  showMore3a: { type: String, require },
});



const typesModel=mongoose.model("types" ,typesSchema)

module.exports = typesModel