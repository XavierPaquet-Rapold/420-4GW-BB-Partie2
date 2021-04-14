const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const panierSchema = new Schema({
    produit: {
        type: ObjectId,
        required: true
    },
    utilisateur: {
        type: ObjectID,
        required: true
    }
}, { timestamps: true });

const Panier = mongoose.model('Panier', panierSchema);
module.exports = Panier;