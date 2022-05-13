const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017";

async  function connectDB() {
  try {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Conectado de MongoDB!!!");
  } catch (error) {
    console.error(" Error al conectar a MongoDB : ", error);
    process.exit(1);
  }
}

module.exports = connectDB;
