const express = require('express');
const router = express.Router();

const logger = require('../logger');
const authorize = require('../authorize')

const {
  getHomePage,
  getFilteredProducts,
  getAuthorizeData
} = require('../controllers/apiProducts')

router.get('/', getHomePage);

router.get('/v1/query', getFilteredProducts)

router.get('/secret', [logger, authorize], getAuthorizeData)

module.exports = router;