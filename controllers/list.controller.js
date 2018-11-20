const List = require('../models/list.model');

//Simple version, without validation or sanitation
exports.test = (req, res) => {
    res.send('Greetings from the Test controller!');
};

exports.create = (req, res) => {
    let list = new List(
        {
            name: req.body.name,
            quantity: req.body.lists
        }
    );

    list.save((err, list) => {
        if (err) {
            return next(err);
        }
        res.send(list)
    });
};

exports.details = (req, res) => {
    List.findById(req.params.id).exec(function(err, list){
        if(err) return next(err);
        res.send(list)
    });
};

exports.findAll = (req, res) => {
    List.find().then(lists => {
        res.send(lists)
    }).catch(err => { 
        res.status(500).send({message: err.message})
    });
};

exports.update = (req, res) => {
    List.findOneAndUpdate(req.params.id, {$set: req.body},
        function(err, list){
            if (err) return next(err);
            res.send(req.body);
    });
};

exports.delete = (req, res) => {
    List.findOneAndDelete(req.params.id, function(err, list){
        if (err) return next(err);
        res.send(list)
    });
};