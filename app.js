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


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

