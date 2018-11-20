const Item = require('../models/item.model');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let listSchema = Schema({
    name: {type: String, required: true, max: 100}
})

module.exports = mongoose.model('List', listSchema);