import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className = {styles.Footer}>
            <div className = {styles.Footer_copyrights}>Copyright by Sergey Tymkov</div>
        </footer>
    )
}

export default Footer;