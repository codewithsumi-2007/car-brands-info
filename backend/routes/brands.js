const express = require('express');
const router = express.Router();

// Dummy data for car brands
const carBrands = [
    { id: 1, name: 'Toyota' },
    { id: 2, name: 'Honda' },
    { id: 3, name: 'Ford' },
    { id: 4, name: 'Chevrolet' },
];

// Get all car brands
router.get('/', (req, res) => {
    res.json(carBrands);
});

// Get car brand by ID
router.get('/:id', (req, res) => {
    const brand = carBrands.find(b => b.id === parseInt(req.params.id));
    if (!brand) return res.status(404).send('Brand not found');
    res.json(brand);
});

module.exports = router;