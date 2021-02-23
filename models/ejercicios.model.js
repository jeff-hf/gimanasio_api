'use strict';

const mongoose = require('mongoose');

const schema_ejercicios = new mongoose.Schema({
    'nombre': { type: String, require: true, unique: true },
    'zona': { type: String, require: true, unique: false },
    'estado': { type: String, require: true, unique: false },
});

module.exports = mongoose.model('Ejercicio', schema_ejercicios, 'ejercicios')