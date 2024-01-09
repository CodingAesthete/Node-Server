const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'alex') {
    req.user = { name: 'alex', id: 6 }
    next();
  }
  res.status(401).send('Unathorized');
}

module.exports = authorize;