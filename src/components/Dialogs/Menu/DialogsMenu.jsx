import React from 'react';
import styles from './DialogsMenu.module.css';
import DialogsMenuSection from './MenuSection/MenuSection'


const DialogsMenu = (props) => {
    
    let menuData = [];

    for (let key in props.menuData) {
        menuData.push( <DialogsMenuSection menuSection = {props.menuData[key]} /> );
    };

    return (
        <div className={styles.dialogsMenu}>
            { menuData }
        </div>
    )
};

export default DialogsMenu;