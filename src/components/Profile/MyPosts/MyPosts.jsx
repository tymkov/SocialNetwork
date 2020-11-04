
import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
        <div className = {styles.content}>

            <div>
                <Post message = 'Hi how are you?' likes = {3}/>
                <Post message = "I'm fine?" likes = {5}/>
                <Post message = 'Idiots :)' likes = {10}/>
            </div>

        </div>
    )
}

export default MyPosts;