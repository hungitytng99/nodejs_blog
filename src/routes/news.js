const express = require('express');
const route = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/', newsController.index);

module.exports = router;
