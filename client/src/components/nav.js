import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className='navbar navbar-expand-lg navbar-secondary bg-white'>
            <div className='container'>
                <Link className='navbar-brand' to={'/'}>App</Link>
            </div>
        </nav>
    )
};