const courseModel = require('../models/course/course.model');

module.exports = (router) => {

  /**
   * GET all courses from the database
   */
  router.get('/course', (req, res) => {
    courseModel.findAllCourses().then((courses) => {
      res.send(courses);
    }).catch((error) => {
      res.status(400).send(error);
    });
  });

};
