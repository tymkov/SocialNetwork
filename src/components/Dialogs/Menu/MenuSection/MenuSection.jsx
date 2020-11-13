import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import styles from './MenuSection.module.css';


const MenuSection = (props) => {

    let menuItems = [];
    let temp = props.menuSection.menuItems;
    
    for (let key in temp) {
        menuItems.push( <MenuItem name={temp[key].name} path = {temp[key].path} />);
    };

    return (         
        <div className = {styles.menuSection}>
            <div className={styles.sectionName}>{props.menuSection.sectionName}</div>
            <div className={styles.sectionItems}>
                { menuItems }
            </div>
        </div>
    )
};

export default MenuSection;
