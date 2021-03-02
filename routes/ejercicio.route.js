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

router.get('/listar-ejercicios', (req, res) => {
    Ejercicios.find((err, ejercicio_db) => {
        if (err) {
            res.json({
                'msj': 'Los ejercicios no se encontro',
                err
            });
        } else {
            res.json({
                'msj': 'Los ejercicios se encontraron correctamente',
                ejercicio_db
            });
        }
    });
});

router.get('/buscar-ejercicios', (req, res) => {
    Ejercicios.findOne({ _id: req.query._id }, (err, ejercicio_db) => {
        if (err) {
            res.json({
                'msj': 'El ejercicio no se encontro',
                err
            });
        } else {
            res.json({
                ejercicio_db
            });
        }
    });
});

router.put('/actualizar-ejercicios', (req, res) => {
    Ejercicios.updateOne({ _id: req.body._id }, {
        $set: {
            nombre: req.body.nombre,
            zona: req.body.zona,
            estado: req.body.estado,
        }
    }, (err, ejercicio_db) => {
        if (err) {
            res.json({
                'msj': 'El ejercicio no se encontro',
                err
            });
        } else {
            res.json({
                ejercicio_db
            });
        }
    });
});

module.exports = router;