const { Schema, model, models } = require("mongoose");
const bcrypt = require("bcrypt");

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
    },
    lastname: {
      type: String,
      required: [true, "User lastname is required"],
    },
    role: String,
    email: {
      type: String,
      required: [true, "User email is required"],
      match: [emailRegex, "Invalid email"],
      validate: [
        {
          validator(email) {
            return models.User.findOne({ email })
              .then((user) => {
                if (!user || user._id.equals(this._id)) {
                  return true;
                }
                return false;
              })
              .catch(() => false);
          },
          message: "The email is already in use",
        },
      ],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  console.log("save");
  if (this.password && this.isModified("password")) {
    console.log("if");
    this.password = await bcrypt.hash(this.password, 8);
  }
});

const User = model("User", userSchema);

module.exports = User;
