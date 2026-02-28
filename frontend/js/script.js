const carBrands = [
    { name: "Toyota", category: "Sedan" },
    { name: "Ford", category: "SUV" },
    { name: "Chevrolet", category: "Truck" },
    { name: "Honda", category: "Sedan" },
    { name: "Nissan", category: "SUV" },
    { name: "Hyundai", category: "Sedan" },
    { name: "Kia", category: "Compact" },
    { name: "Volkswagen", category: "Hatchback" },
    { name: "Subaru", category: "SUV" },
    { name: "BMW", category: "Luxury" },
    { name: "Mercedes-Benz", category: "Luxury" },
    { name: "Audi", category: "Luxury" },
    { name: "Lexus", category: "Luxury" },
    { name: "Mazda", category: "Compact" },
    { name: "Dodge", category: "SUV" },
    { name: "Chrysler", category: "Sedan" },
    { name: "Ram", category: "Truck" },
    { name: "Jeep", category: "SUV" },
    { name: "Land Rover", category: "Luxury" },
    { name: "Porsche", category: "Luxury" },
    { name: "Tesla", category: "Electric" },
];

function searchBrands(query) {
    return carBrands.filter(brand => brand.name.toLowerCase().includes(query.toLowerCase()));
}

function filterBrands(category) {
    return carBrands.filter(brand => brand.category === category);
}

function displayBrands(brands) {
    const list = document.getElementById('brand-list');
    list.innerHTML = '';
    brands.forEach(brand => {
        const item = document.createElement('li');
        item.textContent = brand.name;
        list.appendChild(item);
    });
}

// Event listeners for search and filter
document.getElementById('search').addEventListener('input', (e) => {
    const results = searchBrands(e.target.value);
    displayBrands(results);
});

document.getElementById('filter').addEventListener('change', (e) => {
    const results = filterBrands(e.target.value);
    displayBrands(results);
});

// Initial display of all brands
displayBrands(carBrands);