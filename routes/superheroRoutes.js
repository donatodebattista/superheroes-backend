import express from 'express'
const router = express.Router();
import Superhero from '../models/Superhero.js'


// GET: Obtener todos los superhéroes
router.get('/', async (req, res) => {
    try {
        const heroes = await Superhero.find();
        res.json(heroes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET: Obtener solo Marvel
router.get('/marvel', async (req, res) => {
    try {
        const heroes = await Superhero.find({ casa: 'Marvel' });
        res.json(heroes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET: Obtener solo DC
router.get('/dc', async (req, res) => {
    try {
        const heroes = await Superhero.find({ casa: 'DC' });
        res.json(heroes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET: Detalle de un superhéroe por ID
router.get('/:id', async (req, res) => {
    try {
        const hero = await Superhero.findById(req.params.id);
        if (!hero) return res.status(404).json({ message: 'Superhéroe no encontrado' });
        res.json(hero);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST: Crear un nuevo superhéroe
router.post('/', async (req, res) => {
    const hero = new Superhero(req.body);
    try {
        const newHero = await hero.save();
        res.status(201).json(newHero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT: Actualizar un superhéroe
router.put('/:id', async (req, res) => {
    try {
        const updatedHero = await Superhero.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedHero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: Eliminar un superhéroe
router.delete('/:id', async (req, res) => {
    try {
        await Superhero.findByIdAndDelete(req.params.id);
        res.json({ message: 'Superhéroe eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;