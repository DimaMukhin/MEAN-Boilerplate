const mongoose = require('mongoose');
const studentSchema = require('./student.schema');

const studentModel = mongoose.model('Student', studentSchema, 'Student');

studentModel.createStudent = (student) => {
  return studentModel.create(student);
};

studentModel.findAllStudents = () => {
  return studentModel.find();
};

module.exports = studentModel;
