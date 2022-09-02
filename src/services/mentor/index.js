import axios from 'axios';

export const createMentor = () => {
    axios.post('http://localhost:3333/create-mentor', {
        "name": "Mentor teste",
        "email": "mentor@teste.com",
        "password": "string",
        "age": 40,
        "document": "11717538029",
        "profession": "matematico",
        "practiceArea": "educação",
        "practiceTime": "12",
        "education": "superior completo",
        "userType": "mentor"
    })
    .then(function (response) {
    console.log(response);
    console.log('bateu caralho');
    })
    .catch(function (error) {
    console.log(error);
    });
};

createMentor();

// {
//     "name": "string",
// "email": "string",
// "password": "string",
// "age": 20,
// "document": "string",
// "profession": "string",
// "practiceArea": "string",
// "practiceTime": "string",
// "education": "string",
// "userType": "string"
// }

// {
// 	"uuid": "d2c416d0-2059-4321-b4be-afb12e83b186",
// 	"email": "string",
// 	"name": "string",
// 	"age": 20,
// 	"document": "string",
// 	"profession": "string",
// 	"practiceArea": "string",
// 	"practiceTime": "string",
// 	"education": "string",
// 	"userType": "string"
// }