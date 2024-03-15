import axios from 'axios';

BASE_URL = 'https://7b14-136-233-9-98.ngrok-free.app/';

const getUser = async (userId) => {
    const response = await axios.get(`user/${userId}`);
    console.log(response.data);
    return response.data;
}

export { getUser };