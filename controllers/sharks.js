const path = require('path');

const Shark = require('../models/sharks');

exports.index = (req, res) => res.sendFile(path.resolve('views/sharks.html'));

