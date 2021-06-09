module.exports = (req, res, next) => {
  if (!req.body) {
    return res.status(401).send({ error: 'You must be logged in first!' });
  }
  next();
};
