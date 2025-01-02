const express = require('express');
const Equipment = require('./models'); 

const router = express.Router();

router.post('/create-equipment', async (req, res) => {
    try {
        const equipment = new Equipment(req.body);
        await equipment.save();
        res.status(201).send(equipment);
    } catch (error) {
        console.error('Error creating equipment:', error);
        res.status(400).send({ error: 'Failed to create equipment', details: error.message });
    }
});

router.get('/equipments', async (req, res) => {
    try {
        const equipment = await Equipment.find({});
        res.status(200).send(equipment);
    } catch (error) {
        console.error('Error fetching equipments:', error);
        res.status(500).send({ error: 'Failed to fetch equipments', details: error.message });
    }
});

router.get('/equipment/:id', async (req, res) => {
    try {
        const equipment = await Equipment.findById(req.params.id);
        if (!equipment) {
            return res.status(404).send({ error: 'Equipment not found' });
        }
        res.status(200).send(equipment);
    } catch (error) {
        console.error('Error fetching equipment:', error);
        res.status(500).send({ error: 'Failed to fetch equipment', details: error.message });
    }
});

router.put('/equipment/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'type', 'status', 'leasePrice']; 
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const equipment = await Equipment.findById(req.params.id);
        if (!equipment) {
            return res.status(404).send({ error: 'Equipment not found' });
        }

        updates.forEach((update) => equipment[update] = req.body[update]);
        await equipment.save();
        res.status(200).send(equipment);
    } catch (error) {
        console.error('Error updating equipment:', error);
        res.status(400).send({ error: 'Failed to update equipment', details: error.message });
    }
});

router.delete('/equipment/:id', async (req, res) => {
    try {
        const equipment = await Equipment.findByIdAndDelete(req.params.id);
        if (!equipment) {
            return res.status(404).send({ error: 'Equipment not found' });
        }
        res.status(200).send(equipment);
    } catch (error) {
        console.error('Error deleting equipment:', error);
        res.status(500).send({ error: 'Failed to delete equipment', details: error.message });
    }
});

module.exports = router;