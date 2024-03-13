const mongoose = require('../../Mongo.js')
const { Schema } = mongoose;

const noticiaSchema = new Schema({
    title: String, 
    img: String,
    text: String,
    category: String
},
{
    timestamps: true,
});


const noticiaModel = mongoose.model ( 'noticia', noticiaSchema);

module.exports = noticiaModel;

