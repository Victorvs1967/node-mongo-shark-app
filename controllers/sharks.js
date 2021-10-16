const path = require('path');

const Shark = require('../models/sharks');

exports.index = (req, res) => res.sendFile(path.resolve('views/sharks.html'));

exports.create = (req, res) => {
  let newShark = new Shark(req.body);
  console.log(req.body);
  newShark.save(err =>
    err ? res.status(400).send('Unable to save shark to database.') : res.redirect('shark/getshark'));
};

exports.list = (req, res) => {
  Shark.find({}).exec((err, sharks) =>
    err ? res.send(500, err) : res.render('getshark', { sharks: sharks }));
};