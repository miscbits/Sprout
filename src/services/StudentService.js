const axios = require('axios');

export default class StudentResource {

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
