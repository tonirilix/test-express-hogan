var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* GET find all users. */
router.get('/findall', function(req, res) {
  res.send({ title: 'Express', 
      users:[
          {
              username: 'Antonio',
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
