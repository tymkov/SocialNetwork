
import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
                
            <div>
                <img src='https://utmagazine.ru/uploads/content/%D0%B4%D1%80_12.jpg'></img>
            </div>

            <MyPosts />

        </div>
    )
}

export default Profile;