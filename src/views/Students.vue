<template>
	<div>
		This is where we will see a list of students
	</div>
</template>

<script>
export default {
	created: function() {
		console.log(this.$studentService.getAllStudents())
	}
}
</script>