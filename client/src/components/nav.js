import React from 'react';
import { Link } from 'react-router-dom';
import authAPI from '../util/authAPI';

export default function Nav() {
    return (
        <nav className='navbar navbar-expand-lg navbar-secondary bg-white'>
            <div className='container'>
                <Link className='navbar-brand' to={'/'}>App</Link>
                <Link to={'/'} onClick={authAPI.logout}>Logout</Link>
            </div>
        </nav>
    )
};