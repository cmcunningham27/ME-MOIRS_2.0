import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const signup = (userData) => {
    return axios.post(API_URL + '/auth/signup', userData);
};

const login = async (userData) => {
    const res = await axios.post(API_URL + '/auth/signin', userData);

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

const upload = (data, config) => {
    console.log('here', data);
    return axios.post(API_URL + '/user/upload', data, config)
}

const authAPI = {
    signup: signup,
    login: login,
    logout: logout,
    getCurrentUser: getCurrentUser,
    upload: upload
};

export default authAPI;