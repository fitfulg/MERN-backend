const { response } = require("express");

const crearUsuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: "register",
  });
};

const loginUsuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "token renew",
  });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
