const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProduct,
  getProductReview
} = require('../controllers/products')

router.route('/').get(getProducts);
router.route('/:productID').get(getProduct);
router.route('/:productID/reviews/:reviewID').get(getProductReview);

module.exports = router;