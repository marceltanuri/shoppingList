const express = require('express');
const bodyParser = require('body-parser');

const item = require('./routes/item.route');
const list = require('./routes/list.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://shoppinglist:Mm120490@ds125113.mlab.com:25113/shoppinglist';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
let options = {useNewUrlParser: true, useFindAndModify: false};
mongoose.connect(mongoDB, options);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/items', item);
app.use('/lists', list);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});