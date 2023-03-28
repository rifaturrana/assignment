const express = require('express');
const features = require('../controllers/features.js');

const router = express.Router();

router.get('/',features.index);

module.exports = router;