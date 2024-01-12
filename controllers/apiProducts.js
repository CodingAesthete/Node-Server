let { products } = require('../data');

const getHomePage = (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
};

const getFilteredProducts = (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] })
  }
  res.status(200).json(sortedProducts);
};

const getAuthorizeData = (req, res) => {
  console.log(req.user)
  res.send('You opened Top Secret')
};

module.exports = {
  getHomePage,
  getFilteredProducts,
  getAuthorizeData
}