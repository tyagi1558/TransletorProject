const express = require('express');
const router = express.Router();
const translateController = require('./controller');

router.post('/translate', translateController.translateText);

module.exports = router;
