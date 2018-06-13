var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: { type: String, require: true },
    number: { type: String, require: true },
    lastDateAccess: { type: Date, require: true },
    balance: { type: Number, require: true },
    active: { type: Boolean, require: true }
})

module.exports = mongoose.model("card", schema);