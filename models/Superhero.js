import mongoose from 'mongoose';

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
        required: true
    }
});

export default mongoose.model('Superhero', superheroSchema);
