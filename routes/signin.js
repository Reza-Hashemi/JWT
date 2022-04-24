const express = require('express');
const router = express.Router();
const { loginProcess } = require('../controller/signin');

router.post('/', loginProcess);


module.exports= router