var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new mongoose.Schema({
    _id: { type: Schema.Types.ObjectId, require: true },
    number: { type: String, require: true },
    lastDateAccess: { type: Date, require: false },
    balance: { type: Number, require: false }
}, { collection: "card" });


module.exports = mongoose.model("card", schema);