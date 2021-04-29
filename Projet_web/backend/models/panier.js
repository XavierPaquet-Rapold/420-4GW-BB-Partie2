const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
const Schema = mongoose.Schema;

const panierSchema = new Schema({
    produit: {
        type: ObjectId,
        required: true
    },
    utilisateur: {
        type: String,
        required: true
    }, 
    nombre: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Panier = mongoose.model('Panier', panierSchema);
module.exports = Panier;