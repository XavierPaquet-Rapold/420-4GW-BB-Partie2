const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
const Schema = mongoose.Schema;

const inventaireSchema = new Schema({
    produit: {
        type: ObjectId,
        required: true
    },
    magasin: {
        type: ObjectId,
        required: true
    }
}, { timestamps: true });

const Inventaire = mongoose.model('Inventaire', inventaireSchema);
module.exports = Inventaire;