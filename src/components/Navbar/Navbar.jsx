import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import styles from './Navbar.module.css';


const Navbar = (props) => {
    
    let navMenuItems = props.navMenuData.map (  
        (el) => { return (
            <MenuItem caption={el.caption} path={el.path}/>
        )}
    );

    return (
        <nav className = {styles.navClass}>    
            { navMenuItems };
        </nav>
    )
};

export default Navbar;