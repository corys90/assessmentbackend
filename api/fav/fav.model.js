const mongoose = require("mongoose");

const FavSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
    },
    favList: {
      type: [],
      required: true,
      trim: true,
    }
  }
);

const Favs = mongoose.model("Lista", FavSchema);

module.exports = Favs;
