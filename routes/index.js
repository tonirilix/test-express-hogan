var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', 
      users:[
          {
              username: 'Antonio asdasd 3333',
              firstName: 'Yisus Montes',
              email: 'alucin@fuerte.com'
          },
          {
              username: 'Antonio2',
              firstName: 'Yisus Montes2',
              email: 'alucin2@fuerte.com'
          },
          {
              username: 'Antonio3',
              firstName: 'Yisus Montes3',
              email: 'alucin3@fuerte.com'
          },
      ] });
});

module.exports = router;
