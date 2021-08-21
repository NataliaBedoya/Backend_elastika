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
      const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365,
      });
      res.status(201).json({
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
      const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365,
      });
      res.status(201).json({ token });
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
      const { userId, body } = req;

      const user = await User.findById(userId);
      if (req.body.password !== "") {
        user.password = req.body.password;
      }
      if (req.body.name !== "") {
        user.name = req.body.name;
      }
      if (req.body.lastname !== "") {
        user.lastname = req.body.lastname;
      }
      if (req.body.role !== "") {
        user.role = req.body.role;
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
