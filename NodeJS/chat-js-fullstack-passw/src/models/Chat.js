// Esquema que guarda los datos en la base de datos.
// Tiene sus propios metodos como find, save. etc
const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema ({
    nick:String,
    msg:String,
    created_at: {
        type: Date, 
        default: Date.now
    }
});

// exportamos el módelo(modelo de mongoose)
module.exports = mongoose.model('Chat', chatSchema);