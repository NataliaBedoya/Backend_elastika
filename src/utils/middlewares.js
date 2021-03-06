const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Su sesión expiró");
    }
    const [_, token] = authorization.split(" ");
    if (!token) {
      throw new Error("Su sesión expirsó");
    }
    const { userId } = jwt.verify(token, process.env.SECRET);
    req.userId = userId;

    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};