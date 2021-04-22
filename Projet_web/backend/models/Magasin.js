const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const magasinSchema = new Schema({
nom:{
    type:String,
    required:true
},

adresse:{
    type:String,
    required:true
},

ville:{
    type:String,
    required:true
},

code_postale: {
    type:String,
    required:true
},

tel:{
    type:Number,
    required:true
},

},
{timestamps: true});
const Magasin = mongoose.model('magasin', magasinSchema);
module.exports = Magasin;