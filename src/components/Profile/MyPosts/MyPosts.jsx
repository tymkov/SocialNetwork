
import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {addPostActionCreator} from './../../../redux/state';
import {showTextInTextBoxActionCreator} from './../../../redux/state';


const MyPosts = (props) => {
   
    let textBoxRef = React.createRef();
    
    let postsElements = props.posts.map ( el => <Post message = {el.message} likes = {el.likes}/> );
   
    let addPost = () => props.dispatch(addPostActionCreator());
   
    let showTextInTextBox = () => {
        let text = textBoxRef.current.value;
        props.dispatch(showTextInTextBoxActionCreator(text));
    };

    
    return (
        <div className = {styles.content}>
            { postsElements }           
            <textarea ref={textBoxRef} onChange={ showTextInTextBox } value={props.textForTextbox} />
            <button onClick = { addPost } >Send</button>
        </div>
    )
}

export default MyPosts;