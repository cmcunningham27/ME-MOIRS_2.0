import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authAPI from '../util/authAPI';
import UserContext from '../util/userContext';
import authHeader from '../util/auth-header';

export default function Signup() {
    const navigate = useNavigate();

    const user = useContext(UserContext);

    const onChangeUsername = (e) => {
        user.setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        user.setPassword(e.target.value);
    };

    const onChangeEmail = (e) => {
        user.setEmail(e.target.value);
    };

    const signupUser = (e) => {
        e.preventDefault();

        authAPI.signup({
            username: user.username,
            password: user.password,
            email: user.email
        }).then(res => {
            if (authHeader()) {
                navigate('/login');
            };
        }).catch(err => {
            console.log(err);
        });
    }
};