var express = require('express');
var router = express.Router();
var x=Math.random()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { 
    title: 'Computation by Charita',
    result1: 'Math.atan2() applied '+x+' is '+Math.atan2(x,x),
    result2: 'Math.atanh() applied '+x+' is '+Math.atanh(x),
    result3: 'Math.cbrt() applied '+x+' is '+Math.cbrt(x)
});
});

module.exports = router;
