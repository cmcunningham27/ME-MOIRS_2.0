import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../util/authAPI';
import UserContext from '../util/userContext';


export default function Login() {

    const { username, setUsername, password, setPassword } = useContext(UserContext);

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const loginUser = (e) => {
        e.preventDefault();

        login({
            username: username,
            password: password
        }).then((res) => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <div className='col-md-3 position-absolute top-50 start-50 translate-middle'>
            <div className='card card-container p-4'>
                <form onSubmit={loginUser}>
                    <div className='form-group m-3'>
                        <label className='mb-2' htmlFor='username'>Username</label>
                        <input
                            type='text'
                            className='form-control'
                            name='username'
                            value={username}
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
                            value={password}
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