const mongoose=require('mongoose');

const schema  = mongoose.Schema({
    id:String,
    Book:String,
    price:String,
    author:String,
    link:String,
    more:String,
})
const model = mongoose.model('books', schema);
module.exports = model;
