import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (e) => {
        setUsername(e.tagert.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className='col-md-3 position-absolute top-50 start-50 translate-middle'>
            <div className='card card-container p-4'>
                <form onSubmit={loginUser}>
                    <div className='form-group m-3'>
                        <label className='mb-2' htmlFor='username'>Username</label>
                        <input
                            type='text'
                            classNAme='form-control'
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