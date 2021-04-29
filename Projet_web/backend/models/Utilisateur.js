const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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
    }
},
{timestamps: true})
utilisateurSchema.pre('save', async function (next){
try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();

} catch (error) {
    next(error);
}
});






const Utilisateur = mongoose.model('utilisateur', utilisateurSchema);
module.exports = Utilisateur;