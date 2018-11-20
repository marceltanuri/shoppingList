const Item = require('../models/item.model');

//Simple version, without validation or sanitation
exports.test = (req, res) =>{
    res.send('Greetings from the Test controller!');
}

exports.create = (req, res) => {
    let item = new Item(
        {
            name: req.body.name,
            quantity: req.body.quantity,
            list: req.body.list
        }
    );

    item.save((err) => {
        if (err) {
            return next(err);
        }
        res.send(item);
    });
};

exports.details = (req, res) => {
    Item.findById(req.params.id).populate('list').exec(function(err, item){
        if(err) return next(err);
        res.send(item)
    });
};

exports.findAll = (req, res) => {
    Item.find.then(items => {
        res.send(items)
    }).catch(err => {
        res.status(500).send({message: err.message})
    });
};

exports.update = (req, res) => {
    Item.findOneAndUpdate(req.params.id, {$set: req.body},
        function(err, item){
            if (err) return next(err);
            res.send(req.body);
    });
};

exports.delete = (req, res) => {
    Item.findOneAndDelete(req.params.id, function(err, item){
        if (err) return next(err);
        res.send(item)
    });
};