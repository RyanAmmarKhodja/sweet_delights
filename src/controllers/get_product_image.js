const db = require('../config/db'); // Import the database connection

const get_product_image = async (req, res) => {
    
        try {
            const result = await db.query('SELECT image FROM product WHERE id = $1', [req.params.id]);
           
            if (result.rows.length === 0 || !result.rows[0].image) {
                return res.status(404).json({ message: "Image not found" });
            }

            
            //image was saved in binary format so no need to call multer and do the transformations
            //we send directly
            res.setHeader('Content-Type', 'image/jpeg'); // Adjust if PNG
            res.send(result.rows[0].image); // Send binary image data
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error retrieving product image" });
        }
};

module.exports = { get_product_image };
