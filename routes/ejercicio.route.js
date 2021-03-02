'use strict';

const { json } = require('body-parser');
const express = require('express');
const Ejercicios = require('../models/ejercicios.model');
const router = new express.Router();

router.post('/registrar-ejercicio', (req, res) => {
    let ejercicio = JSON.parse(req.body.obj)
    let nuevo_ejercicio = new Ejercicios({
        'nombre': ejercicio.nombre,
        'zona': ejercicio.zona,
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
    let ejercicio = JSON.parse(req.body.obj)
    Ejercicios.updateOne({ _id: ejercicio._id }, {
        $set: {
            nombre: ejercicio.nombre,
            zona: ejercicio.zona,
            estado: ejercicio.estado,
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