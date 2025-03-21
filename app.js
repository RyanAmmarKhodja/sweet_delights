const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const router = require('./src/routes/router');
const db = require('./src/config/db');
const path = require('path');
require('dotenv').config();

// Middleware to parse JSON requests
app.use(express.json());

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/test-db', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW()'); // Simple query
        res.json({ message: 'Database connected!', time: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database connection failed' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

