import React from 'react';
import authAPI from '../util/authAPI';


export default function Profile() {
    const currentUser = authAPI.getCurrentUser();

    return (
        <div>
            <p>Welcome {currentUser.username}!</p>
        </div>
    )
};