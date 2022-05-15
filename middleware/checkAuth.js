const checkNotLogged = (req, res, next) => {
  if (!req.session.logged) {
    req.session.message = { class: "warning", text: "AVISO: Você deve fazer login primeiro" };
    return res.redirect("/forms");
  }
  next();
};

const checkLogged = (req, res, next) => {
  if (req.session.logged) {
    req.session.message = { class: "warning", text: "AVISO: Você já fez login, te redirecionamos pra cá :)" };
    return res.redirect("/app");
  }
  next();
};

module.exports.checkNotLogged = checkNotLogged;
module.exports.checkLogged = checkLogged;
