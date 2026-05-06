const mongoose = require('mongoose');

const superheroSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    nombreReal: {
        type: String
    },
    anioAparicion: {
        type: Number,
        required: true
    },
    casa: {
        type: String,
        enum: ['Marvel', 'DC'],
        required: true
    },
    biografia: {
        type: String,
        required: true
    },
    equipamiento: {
        type: String
    },
    cantidadImagenes: {
        type: Number,
        required: true,
        min: [1, 'Debe tener al menos una imagen']
    },
    imagenes: {
        type: [String],
        required: true,
        validate: [v => v.length > 0, 'El array de imágenes no puede estar vacío']
    }
});

module.exports = mongoose.model('Superhero', superheroSchema);