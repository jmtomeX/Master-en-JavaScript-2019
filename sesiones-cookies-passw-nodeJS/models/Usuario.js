
const bcrypt = require("bcrypt-nodejs");;
const mongoose = require('mongoose');
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
usuarioSchema.pre('save', function(next){
    const usuario = this;
    if(!usuario.isModified('password')){
        return next();
    }
    // encriptar la contraseña, que itere 10 veces
    bcrypt.gentSalt(10, (err, salt) => {
        if(err){
            next(err);
        }
        // creamos un hash de la contraseña
        bcrypt.hash(usuario.password, salt, null, (err, hash) => {
            if(err){
                next(err);
            }
            // sustituimos  la contraseña del usuario  por la que  acabamos de obtener 
            usuario.password = hash;
            // llamamos a next sin error, para que la información pueda ser almacenada
            next();
        });
    })

})

