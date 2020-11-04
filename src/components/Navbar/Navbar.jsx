
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className = {styles.navClass}>
            
            <div className = {`${styles.item} ${styles.active}`} >
                <a href='/profile'>Professions</a>
            </div>
            <div className = {styles.item}>
                <a href='/dialogs'>Family</a>
            </div>
            <div className = {styles.item}> 
                <a>Lifestyle</a>
            </div>
            <div className = {styles.item}>
                <a>Settings</a>
            </div>
          
        </nav>
    )
}

export default Navbar;