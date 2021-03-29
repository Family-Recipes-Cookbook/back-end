function checkPayload(req, res, next) {
  if (
    !req.body.username ||
    !req.body.password ||
    !req.body.name ||
    !req.body.phone ||
    !req.body.email ||
    !req.body.age
  ) {
    res.status(401).json({ error: "Please provide all information" });
  } else {
    next();
  }
}

module.exports = {
  checkPayload,
};
