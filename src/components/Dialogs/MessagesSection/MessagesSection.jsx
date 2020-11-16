import React from 'react';
import styles from './MessagesSection.module.css';
import MessagesBlock from './MessageBlock/MessagesBlock';
import {addMessageActionCreator} from './../../../redux/dialogsReducer';
import {showNewTextInInputActionCreator} from './../../../redux/dialogsReducer';

const MessagesSection = (props) => {

    let inputMessageElement = React.createRef();

    let getNewMessage = () => props.dispatch(addMessageActionCreator());

    let inputNewText = () => {
        let text = inputMessageElement.current.value;
        props.dispatch(showNewTextInInputActionCreator(text));
    };
    
    return (
        <div className={styles.messagesSection}>
            <div className={styles.messagesWrapper}>
                <MessagesBlock state={props.state.dialogsMenuData[2]} messages={props.state.dialogsMessages[2][2]}/> 
                <MessagesBlock state={props.state.dialogsMenuData[3]} messages={props.state.dialogsMessages[3][2]}/> 
            </div>
            
            <div className={styles.inputBlock}>
              <textarea ref={inputMessageElement} onChange={inputNewText} value={props.state.textInInput} />
              <button onClick={getNewMessage}>Send</button>  
            </div>
        </div>
    )
};

export default MessagesSection;