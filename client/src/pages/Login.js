import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authAPI from '../util/authAPI';
import UserContext from '../util/userContext';
import authHeader from '../util/auth-header';


export default function Login() {
    const navigate = useNavigate();

    const user = useContext(UserContext);

    const onChangeUsername = (e) => {
        user.setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        user.setPassword(e.target.value);
    };

    const loginUser = (e) => {
        e.preventDefault();

        authAPI.login({
            username: user.username,
            password: user.password
        }).then((res) => {
            if (authHeader()) {
               navigate('/profile'); 
            };
            
            // console.log(res);
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <div className='shadow col-md-3 position-absolute top-50 start-50 translate-middle'>
            <div className='card card-container p-4'>
                <form onSubmit={loginUser}>
                    <div className='form-group m-3'>
                        <label className='mb-2' htmlFor='username'>Username</label>
                        <input
                            type='text'
                            className='form-control'
                            name='username'
                            value={user.username}
                            minLength='3'
                            onChange={onChangeUsername}
                            required aria-required='true'
                        />
                    </div>

                    <div className='form-group m-3'>
                        <label className='mb-3' htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            name='password'
                            value={user.password}
                            minLength='8'
                            onChange={onChangePassword}
                            required aria-required='true'
                        />
                    </div>

                    <button className='btn btn-primary btn-block'>Login</button>
                    <p>
                        Don't have an account? <Link to={'/signup'}>Signup</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}