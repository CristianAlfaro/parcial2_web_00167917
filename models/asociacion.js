const mongoose = require('mongoose');
const {Schema} = mongoose;

const asociacionSchema = new Schema({
    name: {type: String, unique:true , required:true},
    departamento: {type: String , required:true},
    años: {type: Number , required:true}
});

module.exports = mongoose.model('asociacion', asociacionSchema);