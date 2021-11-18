import axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth';

const login = async (userData) => {
    const res = await axios.post(API_URL + '/signin', userData);

    if (res.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(res.data));
    };

    return res.data;
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const authAPI = {
    login: login,
    logout: logout,
    getCurrentUser: getCurrentUser
};

export default authAPI;