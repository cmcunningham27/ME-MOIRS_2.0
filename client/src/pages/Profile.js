import React, { useState } from 'react';
import authAPI from '../util/authAPI';
import addImage from '../assets/images/add-image.png';


export default function Profile() {
    const [showForm, setShowForm] = useState(false);
    // const [image, setImage] = useState({});

    const currentUser = authAPI.getCurrentUser();
    console.log(currentUser);

    const url = `http://localhost:3001/api/user/upload/${currentUser.id}`;

    const addButton = () => {
        if (showForm === false) {
            setShowForm(true);
        } else {
            setShowForm(false);
        };
    };

    // const onChangeImage = (e) => {
    //     setImage(e.target.value);
    // };

    // const imageUpload = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('myImage', image);
    //     console.log(formData);
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     };

    //     authAPI.upload(formData, config)
    //     .then(res => {
    //         console.log('did it work???', res);
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    const form = () => {
        return (
            <form 
                className='imageForm p-2 position-absolute bg-light'
                action={url}
                method='POST'
                encType='multipart/form-data'
                // onSubmit={imageUpload}
            >
                <input
                    type='file'
                    className='form-control-file border'
                    name='file'
                    accept='image/*'
                    // onChange={onChangeImage}
                />
                <input
                    type='submit'
                    value='Upload'
                />
                {/* </div> */}
                {/* <button className='btn btn-primary m-2' type='submit'>Upload</button> */}
            </form>
        )
    }

    return (
        <div>
            <div className='imageDiv col-12 position-relative' style={{backgroundImage: `url('https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg')`}}>
                <button className='addBtn btn btn-light rounded-circle position-absolute' onClick={addButton}>
                    <img className='addImage' src={addImage} alt='add' />
                </button>
                {showForm ? form() : null}
            </div>
            <p>Welcome {currentUser.username}!</p>
        </div>
    )
};