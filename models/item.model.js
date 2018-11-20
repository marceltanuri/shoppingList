const List = require('../models/list.model');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = Schema({
    name: {type: String, required: true, max: 100},
    quantity: {type: Number, required: true},
    list: {type: Schema.Types.ObjectId, ref: 'List'}
});


// Export the model
module.exports = mongoose.model('Item', ItemSchema);