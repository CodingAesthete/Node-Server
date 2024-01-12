const express = require('express');
const app = express();
const products = require('./routes/products');
const people = require('./routes/people');
const apiProducts = require('./routes/apiProducts');

app.use(express.static('./methods_public'))
app.use(express.static('./navbar-app'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/people', people)
app.use('/api/products', products)
app.use('/api', apiProducts)

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
})