const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/tokenChecker');
const { dashboardProcess } = require('../controller/dashboard');

router.get('/', protect, dashboardProcess);

module.exports = router;
