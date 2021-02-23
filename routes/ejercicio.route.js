'use strict';

const express = require('express');
const Ejercicios = require('../models/ejercicios.model');
const router = new express.Router();

router.post('/registrar-ejercicio', (req, res) => {
    let nuevo_ejercicio = new Ejercicios({
        'nombre': req.body.nombre,
        'zona': req.body.zona,
        'estado': 'Activo'
    });
    nuevo_ejercicio.save((err, ejercicio_db) => {
        if (err) {
            res.json({
                'msj': 'El ejercicio no se registro',
                err
            });
        } else {
            res.json({
                'msj': 'El ejercicio se registro correctamente',
                ejercicio_db
            });
        }
    });
});

module.exports = router;