const express = require('express');
const path = require('path');

const router = express.router();

router.use((req, res, next) => {
  console.log(`/${req.method}`);
  next();
});

router.get('/', (req, res) => res.sendFile(path.resolve('view/index.html')));

module.exports = router;