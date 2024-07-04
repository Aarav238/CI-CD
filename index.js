const express = require('express');
const app = express();
const port = 3000;

// Sample data
let items = [
    { id: 1, name: 'Aarav' },
    { id: 2, name: 'Shukla' },
];

// Route to get all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Route to add a new item via query parameters
app.get('/api/add-item', (req, res) => {
    const itemName = req.query.name;

    if (!itemName) {
        return res.status(400).json({ error: 'Name query parameter is required' });
    }

    const newItem = {
        id: items.length + 1,
        name: itemName,
    };

    items.push(newItem);
    res.status(201).json(newItem);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
