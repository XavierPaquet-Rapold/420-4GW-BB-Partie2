const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventaireSchema = new Schema({
    id_produit: {
        type: String,
        required: true
    },
    id_magasin: {
        type: String,
        required: true
    },
    nombre: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Inventaire = mongoose.model('Inventaire', inventaireSchema);
module.exports = Inventaire;