const studentModel = require('../models/student/student.model');

module.exports = (router) => {

  /**
   * GET all students from the database
   */
  router.get('/student', (req, res) => {
    studentModel.findAllStudents().then((students) => {
      res.send(students);
    }).catch((error) => {
      res.status(400).send(error);
    });
  });

};
