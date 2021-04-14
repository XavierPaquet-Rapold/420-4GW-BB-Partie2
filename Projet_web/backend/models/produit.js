const { Decimal128 } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prix: {
        type: Decimal128,
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
        type: ObjectID,
        required: true
    }
}, { timestamps: true });

const Produit = mongoose.model('Produit', produitSchema);
module.exports = Produit;