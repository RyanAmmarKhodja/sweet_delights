const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./src/routes/router');
const db = require('./src/config/db');
const path = require('path');

// Middleware to parse JSON requests
app.use(express.json());

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//futur updates:
//responsivity
//order table backend
//menu aesthetics
