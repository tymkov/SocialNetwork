
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className = {styles.headerClass}>
            <img src = 'https://image.spreadshirtmedia.com/image-server/v1/mp/designs/1011754426,width=178,height=178,version=1549767305/the-dragons-team-logo.png'></img>
        </header>
    )
}

export default Header;