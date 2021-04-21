const { Decimal128 } = require('bson');
var ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prix: {
        type: String,
        required: true
    },
    modele: {
        type: String,
        required: true
    },
    marque: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    categorie: {
        type: ObjectId,
        required: true
    }
}, { timestamps: true });

const Produit = mongoose.model('Produit', produitSchema);
module.exports = Produit;