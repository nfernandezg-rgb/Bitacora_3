const express = require("express");
const router = express.Router();
const Producto = require("../models/producto.model");

// POST: Crear producto
router.post("/", async (req, res) => {
    const { nombre, puntosRequeridos, comercio } = req.body;

    if (!nombre || !puntosRequeridos || !comercio) {
        return res.status(400).json({ mensajeError: "Todos los datos son obligatorios" });
    }

    try {
        const nuevoProducto = new Producto({ nombre, puntosRequeridos, comercio });
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ mensajeError: error.message });
    }
});

// GET: Obtener productos
router.get("/", async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;