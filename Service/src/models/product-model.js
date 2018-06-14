var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new mongoose.Schema({
    _id: { type: Schema.Types.ObjectId, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true }
}, { collection: "product" })

module.exports = mongoose.model("product", schema);