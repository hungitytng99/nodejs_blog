const express = require('express');
const route = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/:slug', courseController.show);

module.exports = router;
