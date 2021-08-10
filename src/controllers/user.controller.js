const User = require("../models/user.model");
// const Wod = require("../models/wod.model");
// const Coach = require("../models/coach.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { welcome } = require("../utils/mailer");

module.exports = {
  async list(req, res) {
    try {
      const users = await User.find({}).select({ password: 0 });
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async show(req, res) {
    try {
      const { userId } = req;
      const user = await User.findById(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const { userId, body } = req;
      const user = await User.findByIdAndUpdate(userId, body, { new: true });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const { userId } = req.body;
      const user = await User.findByIdAndDelete(userId);
      console.log(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async create(req, res) {
    try {
      const { body } = req;
      const user = await User.create(body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json("Error registrando un nuevo usuario");
    }
  },

  async signup(req, res) {
    try {
      const { body } = req;
      const user = await User.create(body);

      const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365,
      });
      await welcome(user);

      res.status(201).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

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
        user: {
          name: user.name,
          lastname: user.lastname,
          dni: user.dni,
          dniType: user.dniType,
          birthday: user.birthday,
          email: user.email,
          address: user.address,
          neighborhood: user.neighborhood,
          phone: user.phone,
          height: user.height,
          weight: user.weight,
          active: user.active,
          profilePicture: user.profilePicture,
        },
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // async suscribeWod(req, res) {
  //   try {
  //     const { wodId } = req.body;
  //     const { userId } = req;
  //     let wodInit = await Wod.findById(wodId);
  //     let userInit = await User.findById(userId);
  //     if (wodInit.users.length === wodInit.capacity) {
  //       res.status(200).json("full");
  //     } else if (userInit.wods.includes(wodId)) {
  //       res.status(200).json("already");
  //     } else {
  //       await User.updateOne({ _id: userId }, { $addToSet: { wods: wodId } });
  //       await Wod.updateOne({ _id: wodId }, { $addToSet: { users: userId } });
  //       let user = await User.findById(userId).populate("wods");
  //       res.status(200).json(user);
  //     }
  //   } catch (error) {
  //     res.status(400).json({ message: error.message });
  //   }
  // },

  // async showWods(req, res) {
  //   try {
  //     const { userId } = req;
  //     const user = await User.findById(userId).populate({
  //       path: "wods",
  //       populate: { path: "creator", model: "Coach" },
  //     });
  //     res.status(200).json(user);
  //   } catch (error) {
  //     res.status(404).json({ message: error.message });
  //   }
  // },

  //   async unsuscribeWod(req, res) {
  //     try {
  //       const { wodId } = req.body;
  //       const { userId } = req;
  //       await User.updateOne({ _id: userId }, { $pull: { wods: wodId } });
  //       await Wod.updateOne({ _id: wodId }, { $pull: { users: userId } });
  //       const wodUnsuscribed = await Wod.findById(wodId);
  //       res.status(200).json(wodUnsuscribed);
  //     } catch (error) {
  //       res.status(400).json({ message: error.message });
  //     }
  //   },
};
