import { Router } from 'express';
import AdoptionModel from '../models/Adoption.model.js';

const router = Router();

// GET /api/adoptions
router.get('/', async (req, res) => {
    const adoptions = await AdoptionModel.find();
    res.status(200).json(adoptions);
});

router.get('/:id', async (req, res) => {
    try {
        const adoption = await AdoptionModel.findById(req.params.id);
        if (!adoption) {
            return res.status(404).json({ error: 'Adoption not found' });
        }
        res.json(adoption);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//GET /api/adoptions/:id
router.get(':id', async (req, res) => {
    try {
        const adoption = await AdoptionModel.findById(req.params.id);
        if (!adoption) return res.status(404).json ({ error: 'Not found'});
        res.json(adoption);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }        
});

router.get('/adoptions/:id', async (req, res) => {
    const adoption = await AdoptionModel.findById(req.params.id);
    if (!adoption) return res.status(404).json({ error: 'Not found' });

    res.json(adoption);
})

// POST /api/adoptions
router.post('/', async (req, res) => {
    try {
        const adoption = await AdoptionModel.create(req.body);
        res.status(201).json(adoption);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
});



export default router; 