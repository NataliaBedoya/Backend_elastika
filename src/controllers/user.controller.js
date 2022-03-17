const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  async signin(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("Contraseña o correo invalido");
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error("Contraseña o correo invalido");
      }
      const token = jwt.sign({ userId: user._id, role: user.role }, process.env.SECRET, {
        expiresIn: '2d',
      });
      res.status(200).json({
        token,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async signup(req, res) {
    try {
      const { body } = req;
      const user = await User.create(body);
      const token = jwt.sign({ userId: user._id, role: user.role }, process.env.SECRET, {
        expiresIn: '2d',
      });
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async list(req, res) {
    try {
      const users = await User.find({})
        .select({ password: 0 })
        .collation({ locale: "es" })
        .sort({ name: 1 });
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const { body } = req;

      const user = await User.findById(body.userId);
      if (body.email !== "") {
        user.email = body.email;
      }
      if (body.name !== "") {
        user.name = body.name;
      }
      if (body.lastname !== "") {
        user.lastname = body.lastname;
      }
      if (body.role !== "") {
        user.role = body.role;
      }
      await user.save();

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const { userId } = req.body;
      const user = await User.findByIdAndDelete(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
