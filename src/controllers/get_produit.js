const db = require('../config/db'); // Import the database connection

const get_produit = async (req, res) => {
    try {
        const result = await db.query('SELECT id, name, price, category FROM Product');

        // Attach image URL instead of embedding it
        const products = result.rows.map(product => ({ //instead of sending image alongside json response, 
            id: product.id,                            //we send separate request to /get_body_image
            name: product.name,
            price: product.price,
            category: product.category,
            imageUrl: `/get_product_image/${product.id}` // Image served separately
        }));

        res.status(200).json({ data: products });

    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { get_produit };
