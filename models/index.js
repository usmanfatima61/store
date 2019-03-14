var mongoose = require("mongoose");

// MONGOOSE SCHEMA SETUP
var productSchema = new mongoose.Schema({
    name:         {type:String, require:true},
    image:        {type:String, require:true},
    description:  {type:String, require:true},
    price:       {type:Number, require:true},
     
   
});
// MONGOOSE MODEL
// rabiamoda is the name of the model.** ITS CAN BE CALL ANYTHING
module.exports= mongoose.model("product", productSchema);
