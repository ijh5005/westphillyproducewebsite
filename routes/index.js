const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/epk', (req, res) => {
  var file = __dirname + '/epk.pdf';
  res.download(file);

  // res.redirect('http://westphillieproduce.com/');
});

module.exports = router;
