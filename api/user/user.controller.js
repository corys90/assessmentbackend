var validator = require('validator');
const { createUser, getUserEmail } = require("./user.service");


// Controladora de endpoint POST /api/favs/createuser que crea un user 
async function controllerPostCreateNewUser(req, res) {
 console.log("Create user : ", req.body);
  try {

    if(!req.body.email || !req.body.password  || !req.body.name){
      return res
      .status(400)
      .json({ status: 400, message: "Falta alguno de los siguientes campos obligatorios. email, password o name de usuario" });
    }else{

      if ((req.body.email === "") || (req.body.password === "")  || (req.body.name === "")){
        return res
        .status(400)
        .json({ status: 400, message: "email, password o name de usuario no pueden estar vacios" });
      } else{

          // verifica si ya existe un usuario con ese correo
          const emailVerification = await getUserEmail(req.body.email);
      
          if (emailVerification) {
            return res
              .status(400)
              .json({ status: 400, message: "Este correo ya está registrado" });
          }else{
            if (validator.isStrongPassword(req.body.password, {
              minLength: 10,
              minLowercase: 1,
              minUppercase: 1,
              minNumbers: 1,
            })){
              const userCreated = await createUser(req.body);
              return res.status(201).json(userCreated);     
            }else{
              return res
              .status(400)
              .json({ status: 400, message: "El password no cumple los requisitos de segurdad" });
            }
          }
      }
    }

  } catch (error) {
    console.log("Error creando nuevo usuario: " + error);
    return res.status(500).json(error);
  }

}

module.exports = { controllerPostCreateNewUser };
