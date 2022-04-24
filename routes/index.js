var express = require('express');
var router = express.Router();
const signup = require('./signup');
const signin = require('./signin');
const dashboard = require('./dashboard');

router.get('/', (req, res) => {
  return res.json('wellcome');
});

router.use('/signup', signup);
router.use('/signin', signin);
router.use('/dashboard', dashboard);

module.exports = router;
