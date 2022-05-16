const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    patente: {
        type: String,
        required: true,
        unique: true,
    },
    marca: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
        unique: true,
    },
    año: {
        type: Number,
        required: true,
    },
    cc: {
        type: Number,
    },

});
const Moto = mongoose.model('Moto', storeSchema);

module.exports = {Moto}