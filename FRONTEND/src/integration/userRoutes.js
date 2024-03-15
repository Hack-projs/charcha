import axios from 'axios';
const BASE_URL = 'https://5cb2-136-233-9-98.ngrok-free.app';

const getUser = async (userId) => {
    const response = await axios.get(`${BASE_URL}/user/${userId}`,{
        headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        }
    });
    console.log(response.data);
    return response.data;
}

const createUser = async (user) => {
    const response = await axios.post(`${BASE_URL}/user`, user, {
        headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        }
    });
    console.log(response.data);
    return response.data;
}   


export { getUser ,createUser };