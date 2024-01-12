const express = require('express');
const router = express.Router();
let { products } = require('../data');

router.get('/', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image }
  })
  res.json(newProducts)
})

router.get('/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }
  return res.json(singleProduct)
})

router.get('/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('hello world')
})

module.exports = router;