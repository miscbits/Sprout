const axios = require('axios').create({
  baseURL: process.env.API_URI
});

import Vue from 'vue';

Vue.mixin( {
  beforeCreate() {
    const options = this.$options;
    if ( options.studentService )
      this.$studentService = options.studentService;
    else if ( options.parent && options.parent.$studentService )
      this.$studentService = options.parent.$studentService;
  }
} );


class StudentResource {

  getAllStudents() {
    axios.get('/students')
      .then(response => {
        return response;
      });
  }

  getStudentById(student_id) {
    axios.get('/students/' + student_id)
      .then(response => {
        return response;
      });
  }

  createStudent(student) {
    axios.post('/students', student)
      .then(response => {
        return response;
      });
  }

  updateStudent(student_id, student) {
    axios.put('/students/' + student_id, student)
      .then(response => {
        return response;
      });
  }

  deleteStudent(student_id) {
    axios.delete('/students/' + student_id)
      .then(response => {
        return response;
      });
  }
}

export default new StudentResource();
