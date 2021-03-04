'use strict';

const { json } = require('body-parser');
const express = require('express');
const Rutinas = require('../models/rutinas.model');
const router = new express.Router();

router.post('/registrar-rutina', (req, res) => {
    let rutina = JSON.parse(req.body.obj);

    let nueva_rutina = new Rutinas({
        creacion: rutina.creacion,
        vancimiento: rutina.vancimiento,
    });
    rutina.lista_ejercicios.forEach(ejercicio => {
        nueva_rutina.ejercicios.push(ejercicio._id)
    });

    nueva_rutina.save((err, rutina_db) => {
        if (err) {
            res.json({
                'msj': 'La rutina no se registro',
                err
            });
        } else {
            res.json({
                'msj': 'La rutina se registro correctamente',
                rutina_db
            });
        }
    });
});

module.exports = router;