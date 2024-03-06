// Assuming this is in dogRoutes.js or wherever you define your routes
const express = require('express');
const DogModel = require('../models/DogModel');

const router = express.Router();

router.get('/', async (req, res) => {
    console.log('GET /dogs request received'); // Log when the route is hit
    try {
        const dogs = await DogModel.findAll();
        console.log('Sending dogs response', dogs); // Log the data being sent in the response
        res.json(dogs);
    } catch (error) {
        console.error('Failed to fetch dogs:', error); // Log if there's an error
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

