const mongoose = require('mongoose');


const ProductosSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    existencia: {
        type: Number,
        require: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    }

},
{
    timestamps: true
});

module.exports = mongoose.model('Producto', ProductosSchema);