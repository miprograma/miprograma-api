const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_PATTERN = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [EMAIL_PATTERN, "email inválido"]
    },
    password: {
      type: String,
      required: "La contraseña es obligatoria",
      trim: true,
      lowercase: true,
      match: [
        PASSWORD_PATTERN,
        "Las contraseñas deben contener al menos 6 caracteres, incluyendo mayúsculas, minúsculas y números"
      ]
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

userSchema.pre("save", function(next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  } else {
    bcrypt
      .genSalt(SALT_WORK_FACTOR)
      .then(salt => {
        return bcrypt.hash(user.password, salt).then(hash => {
          user.password = hash;
          next();
        });
      })
      .catch(error => next(error));
  }
});

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
