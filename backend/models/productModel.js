const { Schema, model } = require('../connection');
const mySchema = new Schema({
    name: String,
    title:String,
    discription: String,
    price: Number,
    category: String,
    material: String,
    image: String
})
module.exports = model('product', mySchema);
