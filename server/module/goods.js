var mongoose = require('mongoose')
var Schema  = mongoose.Schema;

var produtSchema = new Schema({
    'productId': {type:String},
    productName: String,
    salePrice: Number,
    productImg: String
})

// api
module.exports = mongoose.module("good", produtSchema)

