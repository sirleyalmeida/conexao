import axios from 'axios';

export const createMentor = (name, email, password, userType) => 
	axios.post('http://localhost:3333/mentor', {
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

export const listMatches = () => 
	axios.get('https://jsonplaceholder.typicode.com/posts')
	.then(function (response) {
		return response
	})
	.catch(function (error) {
		console.log(error);
	});

export const fetchMentor = (uuid) => 
	axios.get(`http://localhost:3333/mentor/${uuid}`)
	.then(function (response) {
		return response
	})
	.catch(function (error) {
		console.log(error);
	});

export const updateMentor = ({name, email, password, age, document, profession, practiceArea, practiceTime, education, userType}, uuid) => 
	axios.put(`http://localhost:3333/mentor/${uuid}`, {
		name: name, 
		email: email, 
		password: password,
		age: age, 
		document: document, 
		profession: profession, 
		practiceArea: practiceArea, 
		practiceTime: practiceTime, 
		education: education,
		userType: userType
	})
	.then(function (response) {
		return response
	})
	.catch(function (error) {
		console.log(error);
	});

