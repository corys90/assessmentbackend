const jsonwebtoken = require("jsonwebtoken");
const compose = require("composable-middleware");
const { getUserEmail } = require("../api/user/user.service");

async function validateToken(token) {
  try {
    const payload = await jsonwebtoken.verify(token, "secret_token");
    return payload;
  } catch (error) {
    return null;
  }
}

function isAuthenticated(req, res, next) {

  return compose().use(async (req, res, next) => {
    const autHeader = req.headers.authorization;
    if (!autHeader) {
      return res.status(401).end();
    }
    const [, token] = autHeader.split(" ");
    const payload = await validateToken(token);

    if (!payload) {
      return res.status(401).end();
    }
    const player = await getUserEmail(payload.email);

    if (!player) {
      return res.status(401).end();
    }

    req.player = player;
    next();
    return null;
  });
}

function signToken(payload) {
  const token = jsonwebtoken.sign(payload, "secret_token", { expiresIn: "2d" });
  return token;
}

module.exports = {
  isAuthenticated,
  signToken,
};
