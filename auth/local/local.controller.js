const { getUserEmail } = require("../../api/user/user.service");

const { signToken } = require("../auth.services");

async function controllerLogin(req, res) {

    const { email, password } = req.body;

    if (email && password){

      try {
        const user = await getUserEmail(email);
        if (!user) {
          return res
            .status(401)
            .json({ status: 401, message: "Correo o contraseña inválidos, por favor verifica de nuevo" });
        } 

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
          return res
            .status(401)
            .json({ status: 401, message: "Correo o contraseña inválidos, por favor verifica de nuevo" });
        }
    
        const token = await signToken(user.email);
        return res.status(200).json({"Bearer": token});
      } catch (error) {
        console.log("Error: ", error);
        return res.status(400).json(error);
      }
    }else{
      return res
      .status(404)
      .json({ status: 404, message: "email o password son campos obligatorios." });
    }


}

module.exports = { controllerLogin };
