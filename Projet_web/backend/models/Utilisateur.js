const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const utilisateurSchema = new Schema({
    prenom :{
        type:String,
        required : true
    },
    nom:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
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
    cartecredit: {
        type:String,
        required:true
    }
},
{timestamps: true});
const Utilisateur = mongoose.model('utilisateur', utilisateurSchema);
module.exports = Utilisateur;