const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Su sesión expiró");
    }

    const [_, token] = authorization.split(" ");

    if (!token) {
      throw new Error("Su sesión expiró");
    }

    const { userId } = jwt.verify(token, process.env.SECRET);

    req.userId = userId;

    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.userFilter = (req, res, next) => {
  if (req.body.name === "") {
    delete req.body.name;
  }
  if (req.body.lastname === "") {
    delete req.body.lastname;
  }
  if (req.body.dniType === "") {
    delete req.body.dniType;
  }
  if (req.body.dni === "") {
    delete req.body.dni;
  }
  if (req.body.address === "") {
    delete req.body.address;
  }
  if (req.body.neighborhood === "") {
    delete req.body.neighborhood;
  }
  if (req.body.phone === "") {
    delete req.body.phone;
  }
  if (req.body.height === "") {
    delete req.body.height;
  }
  if (req.body.weight === "") {
    delete req.body.weight;
  }
  if (req.body.birthday === "") {
    delete req.body.birthday;
  }

  next();
};
