const jsonwebtoken = require("jsonwebtoken");

async function validateToken(token) {
  try {
    const payload = await jsonwebtoken.verify(token, "assesment-backend");
    return payload;
  } catch (error) {
    return null;
  }
}

async function isAuthenticated(req, res, next) {

  console.log("Autenticaciôn: ", !req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).end({message:'Autorización fallida. Token es obligatorio'});
  }else{
      try {
        const autHeader = req.headers.authorization;
        const token = autHeader.split(" ")[1];
        const payload = await validateToken(token);
        console.log("Payload: ", payload);
        if (!payload) {
          return res.status(401).end({message:'Autorización fallida. Token no válido'});
        }
        else{
          next();
          return null;
        }
      } catch (error) {
        return res.status(401).end({message:'Autorización fallida. Token no válido'});
      }
  }
}

async function signToken(payload) {
  const token = jsonwebtoken.sign(payload, "assesment-backend");
  return token;
}

module.exports = {
  isAuthenticated,
  signToken,
};
