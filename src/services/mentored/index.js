import axios from 'axios';

export const createMentored = (name, email, password, userType ) =>
	axios.post('http://localhost:3333/mentored', {
		name: name,
		email: email,
		password: password,
		userType: userType
	})
	.then(function (response) {
		return response
	})
	.catch(function (error) {
		console.log(error);
	});