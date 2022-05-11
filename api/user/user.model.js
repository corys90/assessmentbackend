const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    }
  }
);

UserSchema.pre("save", async function (next) {
  const user = this;

  try {
    if (!user.isModified("password")) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(player.password, salt);

    user.password = hash;
    return next();
  } catch (error) {
      Console.log("Error con el modelo:" + error); 
    return next(error);
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  return bcrypt.compare(candidatePassword, user.password);
};


const User = mongoose.model("users", UserSchema);

module.exports = User;
