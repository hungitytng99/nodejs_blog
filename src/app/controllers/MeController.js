const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../utils/mongoose');
class MeController {
    //[GET] /news

    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
