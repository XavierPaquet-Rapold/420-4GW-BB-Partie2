const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const magasinSchema = new Schema({
nom:{
    type:String,
    required:true
},

telephone:{
    type:Number,
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
postale: {
    type:String,
    required:true
},

},
{timestamps: true});
const Magasin = mongoose.model('magasin', magasinSchema);
module.exports = Magasin;