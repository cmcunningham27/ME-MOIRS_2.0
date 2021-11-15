import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

const login = async (userData) => {
    const res = await axios.post(API_URL + '/signin', userData);

    if (res.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(res.data));
    };

    return res.data;
};

export default login;