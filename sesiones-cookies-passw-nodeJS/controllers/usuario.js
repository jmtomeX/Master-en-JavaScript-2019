// logica de usuario
const passport = require("passport");
const Usuario = require("../models/Usuario");

// ruta encargada de crear los usuarios(registro9)
exports.postSignup = (req, res, next) => {
  const usuario = new Usuario({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  });

  // comprobar si ya existe el mail
  Usuario.findOne(
    {
      email: req.body.email
    },
    (err, usuarioExistente) => {
      if (usuarioExistente) {
        return res.status(400).send("Ya está registrado ese email");
      }

      usuario.save(err => {
        if (err) {
          next(err);
        }
        // logIn método de mongoose
        req.logIn(usuario, err => {
          if (err) {
            next(err);
          }
          res.send('Usuario creado correctamente');
        });
      });
    }
  );
};

// para usuarios registrados puedan acceder
exports.postLogin = (req, res, next) => {
    // autentificació del cliente, estrategia local
    passport.authenticate('local', (err, usuario, info) => {
        if (err) {
            next(err);
          }
        if(!usuario){
            return res.status(400).send("Email o contraseña no válidos");
        }
        // autorizar al usuario
        req.login(usuario, (err) => {
            if (err) {
                next(err);
              }
              res.send('Datos correctos')
        })
        // invocar la función passport
    })(req, res, next);
}

// logout
exports.logout = (req, res) => {
    req.logout();
    res.send('Logout exitoso');
}