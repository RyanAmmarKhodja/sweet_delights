const db = require('../config/db'); // Import the database connection
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } }); // 10MB limit


const ajouter_produit = async (req, res) => {
    try {
        console.log('Received POST request:', req.body);
        const {name, price, image, category} = req.body;

        if (!name || !price || !category) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const imageBuffer = req.file.buffer; //transform image into array of bytes
        const result = await db.query(
            'INSERT INTO Product (name, price, image, category) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, price, imageBuffer, category] //insert data and binary image into db
        );

        res.status(201).json({ message: "Produit enregistré", data: result.rows[0] });

    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { ajouter_produit };
