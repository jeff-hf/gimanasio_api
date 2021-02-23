'use strict';

const express = require('express');
const Usuario = require('../models/usuarios.model');
const router = new express.Router();

router.post('/registrar-usuario', (req, res) => {
    let nuevo_usuario = new Usuario({
        'cedula': req.body.cedula,
        'nombre': req.body.nombre,
        'edad': req.body.edad,
        'estatura': req.body.estatura,
        'peso': req.body.peso,
    });
    nuevo_usuario.save((err, usuario_db) => {
        if (err) {
            res.json({
                'msj': 'El usuario no se registro',
                err
            });
        } else {
            res.json({
                'msj': 'El usuario se registro correctamente',
                usuario_db
            });
        }
    });
});

module.exports = router;