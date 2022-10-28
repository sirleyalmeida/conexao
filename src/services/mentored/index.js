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

export const SignInMentored = ( email) => 
	axios.get(`http://localhost:3333/mentored-email/${email}`, {
		email: email
	})
	.then(function (response) {
		return response
	})
	.catch(function (error) {
		console.log(error);
	});

export const fetchMentored = (uuid) => 
	axios.get(`http://localhost:3333/mentored/${uuid}`)
	.then(function (response) {
		return response
	})
	.catch(function (error) {
		console.log(error);
	});

export const updateMentored = ({ name, email, password, age, document, profession, interestArea, education, mentorshipGoal, userType, feedback}, uuid) => 
	axios.put(`http://localhost:3333/mentored/${uuid}`, {
		name: name, 
		email: email, 
		password: password,
		age: age, 
		document: document, 
		profession: profession, 
		interestArea: interestArea, 
		education: education,
		mentorshipGoal: mentorshipGoal, 
		userType: userType,
		feedback: feedback,
	})
	.then(function (response) {
		return response
	})
	.catch(function (error) {
		console.log(error);
	});
