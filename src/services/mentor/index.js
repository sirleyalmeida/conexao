import axios from 'axios';

export const createMentor = (name, email, password, age, cpf, profession, practiceTime, practiceArea, education, userType) => {
	axios.post('http://localhost:3333/create-mentor', {
		name: name,
		email: email,
		password: password,
		age: age,
		document: cpf,
		profession: profession,
		practiceArea: practiceArea,
		practiceTime: practiceTime,
		education: education,
		userType: userType
	})
	.then(function (response) {
		console.log(response.statusText);
	})
	.catch(function (error) {
		console.log(error);
	});
};

export const listMatches = () =>
	axios.get('https://jsonplaceholder.typicode.com/posts')
	.then(function (response) {
		return response
	})
	.catch(function (error) {
		console.log(error);
	});

