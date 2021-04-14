const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventaireSchema = new Schema({
    produit: {
        type: ObjectId,
        required: true
    },
    magasin: {
        type: ObjectID,
        required: true
    }
}, { timestamps: true });

const Inventaire = mongoose.model('Inventaire', panierSchema);
module.exports = Inventaire;