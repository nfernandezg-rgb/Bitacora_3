const express = require("express");
const router = express.Router();  // se crea la senhal
const Usuario = require("../models/usuario.model");


//Rutas
// POST: Crear usuario
router.post("/", async (req, res) => {
    const { nombre, correo } = req.body;

    if (!nombre || !correo) {
        return res.status(400).json({ mensajeError: "Nombre y correo son obligatorios" });
    }

    try {
        const nuevoUsuario = new Usuario({ nombre, correo });
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ mensajeError: error.message });
    }
});

// GET: Solicitar los datos de los empleados a la BD
router.get("/", async (req, res) => {
    try {
        const usuario = await Usuario.findOne();

        if (!usuario) {
            return res.status(404).json({ mensaje: "No hay usuario registrado" });
        }

        // Agregar puntosTotales dinámicamente
        const usuarioConTotales = {
            ...usuario._doc,
            puntosTotales: usuario.puntosDisponibles + usuario.puntosCanjeados
        };

        res.json(usuarioConTotales);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;