const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaUsuario = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: false
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    puntosDisponibles: {
        type: Number,
        required: true,
        default: 0
    },
    puntosCanjeados: {
        type: Number,
        required: true,
        default: 0
    }
});

const Usuario = mongoose.model("Usuario", schemaUsuario);
module.exports = Usuario;