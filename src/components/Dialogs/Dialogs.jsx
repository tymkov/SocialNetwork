import React from 'react';
import styles from './Dialogs.module.css';
import DialogsMenu from './Menu/DialogsMenu';
import MessagesSection from './MessagesSection/MessagesSection';

const Dialogs = (props) => {
    
    return (
        <div className={styles.dialogsWrapper}>
            
            <DialogsMenu menuData = {props.store.getDialogsState().dialogsMenuData} />

            <MessagesSection store={props.store}/>
            
            <div className={styles.dialogsInfo}>Dialog Info</div>

        </div>
    )
};

export default Dialogs;