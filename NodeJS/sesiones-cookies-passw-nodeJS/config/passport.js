// npm install --save passport passport-local
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Usuario = require("../models/Usuario");

// conectar usuario
// el parámetro usuario es un objeto de mongoose con toda la información del usuario
// el callback done es para notificar la finalización de la serialización
passport.serializeUser((usuario, done) => {
  done(null, usuario._id);
});

// Desconectar usuario
passport.deserializeUser((id, done) => {
  Usuario.findById(id, (err, usuario) => {
    done(err, usuario);
  });
});

// Estrategia local
passport.use(
  new LocalStrategy(
    // lo que se utiiliza como username
    { usernameField: "email" },
    (email, password, done) => {
      // utilizamos el modelo para buscar el usuario en la base de datos
      Usuario.findOne({ email }, (err, usuario) => {
        // di no está
        if (!usuario) {
          return done(null, false, {
            message: `Este email: ${email} no está registrado`
          });
        } else {
          usuario.comparePassword(password, (err, sonIguales) => {
            if (sonIguales) {
              return done(null, usuario);
            } else {
              return done(null, false, {
                message: "La contraseña no es válida"
              });
            }
          });
        }
      });
    }
  )
);

// rutas que necesita que esté autentificado
exports.estaAutenticado = (req, res, next) => {
    // isAuthenticated es un método de passport que agrega a todos los req
    if(req.isAuthenticated()){
        return next();
    } 
    // 401 no esta autorizado para acceder a ese recurso
    res.status(401).send('Tienes que hacer login para acceder a este recurso')
}
