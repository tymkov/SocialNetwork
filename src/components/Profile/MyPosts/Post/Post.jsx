
import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className = {styles.item}>   

            <div>
                <img src='https://image.shutterstock.com/image-illustration/red-dragon-portrait-digital-painting-260nw-1543370009.jpg'></img>
                description
            </div>

            <div>
                {props.message}
            </div>

            <div>
                <span>Likes: </span> 
                {props.likes}
            </div>

        </div>
    )
}

export default Post;