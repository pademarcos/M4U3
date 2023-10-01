var express = require('express');
var router = express.Router();

/* GET contacto page. */
router.get('/', function(req, res, next) {
  res.send('Pagina de Contacto desde contacto.js');
});

module.exports = router;
