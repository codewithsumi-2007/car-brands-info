const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample API endpoint for car brands
app.get('/api/car-brands', (req, res) => {
    const carBrands = [
        { name: 'Toyota', origin: 'Japan' },
        { name: 'Ford', origin: 'USA' },
        { name: 'BMW', origin: 'Germany' },
        { name: 'Hyundai', origin: 'South Korea' }
    ];
    res.json(carBrands);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});