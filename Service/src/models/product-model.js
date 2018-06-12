var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    active: { type: Boolean, require: true }
})

module.exports = mongoose.model("product", schema);