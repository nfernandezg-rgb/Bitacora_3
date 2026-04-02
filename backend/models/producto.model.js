const mongoose = require("mongoose");

const schemaProducto = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    puntosRequeridos: {
        type: Number,
        required: true
    },
    comercio: {
        type: String,
        required: true
    }
});

const Producto = mongoose.model("Producto", schemaProducto);
module.exports = Producto;