var express = require('express');
var router = express.Router();

/* GET productos page. */
router.get('/', function(req, res, next) {
  res.send('Pagina Productos desde productos.js');
});

module.exports = router;
