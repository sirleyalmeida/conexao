export const createMentor = () => {
    const URL = `https://jsonplaceholder.typicode.com/todos`;
    return fetch(URL);
};