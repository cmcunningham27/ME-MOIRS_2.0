import React, { useState, useEffect } from 'react';
import authAPI from '../util/authAPI';
import addImage from '../assets/images/add-image.png';


export default function Profile() {
    const [showForm, setShowForm] = useState(false);
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const [user, setUser] = useState({})

    const currentUser = authAPI.getCurrentUser()

    useEffect(() => {
         authAPI.getUser(currentUser.id)
        .then(res => {
            setUser(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    console.log(user, 'user')

    // const URL = `http://localhost:3001/api/user/upload/${currentUser.id}`;

    // useEffect(() => {
    //     if (url) {
    //         authAPI.addCover(currentUser.id, url)
    //         .then(data => {
    //             setCurrentUser(authAPI.getCurrentUser());
    //         })
    //     }
    // }, [image, url, currentUser.id]);

    const addButton = () => {
        if (showForm === false) {
            setShowForm(true);
        } else {
            setShowForm(false);
        };
    };

    const onChangeImage = (e) => {
        setImage(e.target.files[0]);
    };

    

    const imageUpload = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'memoirs');
        data.append('cloud_name', 'cmcunningham');
        fetch('https://api.cloudinary.com/v1_1/cmcunningham/image/upload', {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then(data => {
            setUrl(data.url);
            authAPI.addCover(currentUser.id, data.url)
            .then(data => {
                console.log('Cover photo uploaded successfully!');
            })
        })
        .catch(err => console.log(err));
    }

    const form = () => {
        return (
            <form 
                className='imageForm p-2 position-absolute bg-light'
                // action={URL}
                // method='POST'
                // encType='multipart/form-data'
                onSubmit={imageUpload}
            >
                <input
                    type='file'
                    className='form-control-file border'
                    // name='file'
                    // accept='image/*'
                    onChange={onChangeImage}
                />
                <input
                    type='submit'
                    // value='Upload'
                />
                {/* </div> */}
                {/* <button className='btn btn-primary m-2' type='submit'>Upload</button> */}
            </form>
        )
    }
//  style={{ backgroundImage: `url(${image})`}}
    return (
        <div>
            {user.coverData ? 
                <div className='imageDiv col-12 position-relative' style={{backgroundImage: `url(${user.coverData})`}}>
                    {/* <img src='../assets/uploads/1637978835896-black-and-white-me.jpg' alt='cover'/> */}
                    <button className='addBtn btn btn-light rounded-circle position-absolute' onClick={addButton}>
                        <img className='addImage' src={addImage} alt='add' />
                    </button>
                    {showForm ? form() : null}
                </div>
            :
                <div className='imageDiv col-12 position-relative'>
                    {/* <img src='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg' alt='cover'/> */}
                    <button className='addBtn btn btn-light rounded-circle position-absolute' onClick={addButton}>
                        <img className='addImage' src={addImage} alt='add' />
                    </button>
                    {showForm ? form() : null}
                </div>
            }
                
            <p>Welcome {currentUser.username}!</p>
        </div>
    )
};