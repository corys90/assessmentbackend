const { getUserEmail } = require("../../api/user/user.service");


function controllerLogin(req, res) {

    const { email, password } = req.body;
    try {
      const user = await getUserEmail(email);
  
      if (!player) {
        return res
          .status(401)
          .json({ status: 401, message: "Correo o contraseña inválidos, por favor verifica de nuevo" });
      } else if (!player.state) {
        return res
          .status(401)
          .json({ status: 401, message: "No has activado tu cuenta, verifica tu bandeja de entrada (no olvides revisar tus mensajes de spam)" });
      }
  
      const isMatch = await player.comparePassword(password);
      if (!isMatch) {
        return res
          .status(401)
          .json({ status: 401, message: "Correo o contraseña inválidos, por favor verifica de nuevo" });
      }
  
      const token = signToken(player.profile);
      return res.status(200).json({token});
    } catch (error) {
      return res.status(400).json(error);
    }
}

module.exports = { controllerLogin };
