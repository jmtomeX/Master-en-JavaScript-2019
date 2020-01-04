const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
// PARA EL ERROR -> (node:2340) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  // cuando fue creado y cuando fue modificado
  {
    timestamps: true
  }
);
// método que mongoose ejecuta antes de guardar el objeto
// usa el módulo de node bcrypt-nodejs
usuarioSchema.pre("save", function(next) {
  const usuario = this;
  if (!usuario.isModified("password")) {
    return next();
  }
  // encriptar la contraseña, que itere 10 veces
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      next(err);
    }
    // creamos un hash de la contraseña
    bcrypt.hash(usuario.password, salt, null, (err, hash) => {
      if (err) {
        next(err);
      }
      // sustituimos  la contraseña del usuario  por la que  acabamos de obtener del hash
      usuario.password = hash;
      // llamamos a next sin error, para que la información pueda ser almacenada
      next();
    });
  });
});

// comparar contraseña
usuarioSchema.methods.comparePassword = function(password, cb) {
  // (passw que está haciendo login, passw que está almacenado, comparación )
  bcrypt.compare(password, this.password, (err, sonIguales) => {
    // en caso de error se le llama alcallback con el error
    if (err) {
      return cb(err);
    }
    // si son iguales le mandamos  sin error y el boolean 
    cb(null, sonIguales);
  });
}
// crea el modelo IUsuario y el esquema de cual es la información del usuario
module.exports = mongoose.model('Usuario', usuarioSchema);
