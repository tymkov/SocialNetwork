import React from 'react';
import styles from './MessagesSection.module.css';
import MessagesBlock from './MessageBlock/MessagesBlock';
import {addMessageActionCreator} from './../../../redux/state';
import {showNewTextInInputActionCreator} from './../../../redux/state';

const MessagesSection = (props) => {

    let inputMessageElement = React.createRef();

    let getNewMessage = () => props.store.dispatch(addMessageActionCreator());

    let inputNewText = () => {
        let text = inputMessageElement.current.value;
        props.store.dispatch(showNewTextInInputActionCreator(text));
    };
    
    return (
        <div className={styles.messagesSection}>
            <div className={styles.messagesWrapper}>
                <MessagesBlock state={props.store.getDialogsState().dialogsMenuData[2]} messages={props.store.getDialogsState().dialogsMessages[2][2]}/> 
                <MessagesBlock state={props.store.getDialogsState().dialogsMenuData[3]} messages={props.store.getDialogsState().dialogsMessages[3][2]}/> 
            </div>
            
            <div className={styles.inputBlock}>
              <textarea ref={inputMessageElement} onChange={inputNewText} value={props.store.getDialogsState().textInInput} />
              <button onClick={getNewMessage}>Send</button>  
            </div>
        </div>
    )
};

export default MessagesSection;