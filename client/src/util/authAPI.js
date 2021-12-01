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

const addCover = (id, data) => {
    console.log(id, data);
    return axios.put(API_URL + '/auth/cover/' + id, {coverData: data})
};

const getUser = (id) => {
    console.log(id, 'is it here')
    return axios.get(API_URL + '/auth/user/' + id);
}

const user = (data) => {
    return axios.get(API_URL + '/user/' + data)
}

const authAPI = {
    signup: signup,
    login: login,
    logout: logout,
    getCurrentUser: getCurrentUser,
    addCover: addCover,
    getUser: getUser,
    user: user
};

export default authAPI;