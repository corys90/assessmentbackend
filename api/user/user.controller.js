
const {
  createUser,
  getUserEmail,
} = require("./user.service");



// Controladora de endpoint POST /api/favs/createuser que crea un user 
function controllerPostCreateNewUser(req, res) {

  try {
    if ((req.body.email === "") || (req.body.password === "")  || (req.body.nombre === "")){
      return res
      .status(400)
      .json({ status: 400, message: "Email, password o nombre de usuario no pueden estar vacios" });
    }

    // verifica si ya existe un usuario con ese correo
    const emailVerification = await getUserEmail(req.body.email);

    if (emailVerification) {
      return res
        .status(400)
        .json({ status: 400, message: "Este correo ya está registrado" });
    }

    const userCreated = await createUser(req.body);
    return res.status(201).json(userCreated);

  } catch (error) {
    console.log("Error creando nuevo usuario: " + error);
    return res.status(500).json(error);
  }

}




module.exports = { controllerPostCreateNewUser };
