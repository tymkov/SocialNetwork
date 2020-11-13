import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './MenuItem.module.css';

const MenuItem = (props) => {
    return (  
        <div className = {styles.item} >
            <NavLink to={props.path} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
}

export default MenuItem;
