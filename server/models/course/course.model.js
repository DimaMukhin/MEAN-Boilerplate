const mongoose = require('mongoose');
const courseSchema = require('./course.schema');

const courseModel = mongoose.model('Course', courseSchema, 'Course');

courseModel.createCourse = (course) => {
  return courseModel.create(course);
};

courseModel.findAllCourses = () => {
  return courseModel.find();
};

module.exports = courseModel;
