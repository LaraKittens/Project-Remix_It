require("dotenv").config();

const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashPassword = async (password) => {
  const hashedPassword = await argon2.hash(password);
  return hashedPassword;
};

const verifyPassword = async (password, hashedPassword) => {
  const verifiedPassword = await argon2.verify(hashedPassword, password);
  return verifiedPassword;
};

const adminCheck = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.sendStatus(401);
  }
};

const checkUserId = (req, res, next) => {
  if (req.user.id === parseInt(req.params.id || req.body.userId, 10)) {
    next();
  } else {
    res.sendStatus(401);
  }
};

const checkRoleOrUserId = (req, res, next) => {
  if (
    req.user.id === parseInt(req.body.userId || req.params.id, 10) ||
    req.user.isAdmin
  ) {
    next();
  } else {
    console.error("1");
    res.sendStatus(401);
  }
};

const createJwt = (user) => {
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: parseInt(process.env.JWT_EXPIRES, 10),
  });
  return token;
};

const verifyToken = (req, res, next) => {
  const { userToken } = req.cookies;
  if (!userToken) {
    return res.sendStatus(401);
  }
  try {
    const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).send(err);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  adminCheck,
  createJwt,
  verifyToken,
  checkUserId,
  checkRoleOrUserId,
};
