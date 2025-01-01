const express = require('express');
const Equipment = require('../models/equipment'); 

const router = express.Router();

router.post('/equipment', async (req, res) => {
    try {
        const equipment = new Equipment(req.body);
        await equipment.save();
        res.status(201).send(equipment);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/equipment', async (req, res) => {
    try {
        const equipment = await Equipment.find({});
        res.status(200).send(equipment);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/equipment/:id', async (req, res) => {
    try {
        const equipment = await Equipment.findById(req.params.id);
        if (!equipment) {
            return res.status(404).send();
        }
        res.status(200).send(equipment);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.patch('/equipment/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'type', 'status', 'leasePrice']; 
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const equipment = await Equipment.findById(req.params.id);
        if (!equipment) {
            return res.status(404).send();
        }

        updates.forEach((update) => equipment[update] = req.body[update]);
        await equipment.save();
        res.status(200).send(equipment);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/equipment/:id', async (req, res) => {
    try {
        const equipment = await Equipment.findByIdAndDelete(req.params.id);
        if (!equipment) {
            return res.status(404).send();
        }
        res.status(200).send(equipment);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;