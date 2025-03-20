const {ajouter_produit} = require('../controllers/ajouter_produit');
const {get_produit} = require('../controllers/get_produit');
const {get_product_image} = require('../controllers/get_product_image');
const express = require('express');
const router = express.Router();

const multer = require('multer'); //multer to handle file transfer in API, efficient for images
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } }); // 10MB limit
//default limit is too small, we increased it to 10MB


router.post('/ajouter_produit', upload.single('image') , ajouter_produit); //I don't really know what it does
router.get('/get_produit', get_produit);
router.get('/get_product_image/:id',get_product_image); 

// router.get('/afficher_rdv', afficher_rdv);
// router.put('/modifier_rdv/:id',modifier_rdv);
// router.delete('/supprimer_rdv/:id',supprimer_rdv);




module.exports= router;