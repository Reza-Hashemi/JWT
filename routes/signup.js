const express = require('express');
const router = express.Router();
const { signupProcess } = require('../controller/signup');

router.post('/', signupProcess);

module.exports = router;
