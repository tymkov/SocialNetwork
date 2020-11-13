import React from 'react';
import styles from './MessagesBlock.module.css';
import MessageItem from './MessageItem/MessageItem';


const MessagesBlock = (props) => {
    
    let messagesItems = props.messages.map ( el => <MessageItem id={el.id} message={el.message}/>  );

    return (
        <div className={styles.messagesBlock}>

            <div className={styles.blockName}>{props.state.sectionName + '/' + props.state.menuItems[2].name}</div>
            <div className={styles.messagesArea}>
                { messagesItems }
            </div>
        
        </div>
    )
};

export default MessagesBlock;