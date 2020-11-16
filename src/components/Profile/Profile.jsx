
import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {
    debugger;
    return (
        <div className={styles.contentClass}>   
            <div>
                <img src='https://utmagazine.ru/uploads/content/%D0%B4%D1%80_12.jpg'></img>
            </div>
            <MyPosts posts={props.state.postsData} textForTextbox={props.state.textForTextbox} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;