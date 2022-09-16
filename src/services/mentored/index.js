import axios from 'axios';

export const createMentored = (name, email, password, age, cpf, profession, fieldOfInterest, mentorshipGoal, userType ) => {
	axios.post('http://localhost:3333/create-mentored', {
		name: name,
		email: email,
		password: password,
		age: age,
		document: cpf,
		profession: profession,
		fieldOfInterest: fieldOfInterest,
		mentorshipGoal: mentorshipGoal,
		userType: userType
	})
	.then(function (response) {
		console.log(response.statusText);
	})
	.catch(function (error) {
		console.log(error);
	});
};