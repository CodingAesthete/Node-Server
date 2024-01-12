let { products } = require('../data');

const getProducts = (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image }
  })
  res.json(newProducts)
}

const getProduct = (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }
  return res.json(singleProduct)
}

const getProductReview = (req, res) => {
  console.log(req.params);
  res.send('hello world')
}

module.exports = {
  getProducts,
  getProduct,
  getProductReview
}