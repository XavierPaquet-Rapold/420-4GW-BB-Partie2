const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitCatSchema= new Schema({
nom:{
    type:String,
    required:true
},},
{timestamps: true});
const Magasin = moongoose.model('produit_categorie', produitCatSchema);
module.exports = Magasin;