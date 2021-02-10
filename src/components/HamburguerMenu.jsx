import React, { useState } from "react";
import HamburguerIcon from "./icons/HamburguerIcon";
import './HamburguerMenu.css';

const HamburguerMenu = () => {

    // State for animating the burguer menu
    const [menuAnimation, changeMenuAnimation] = useState(false);

    return (
        <button 
            className={menuAnimation ? "menu opened" : "menu"}
            id="idMenu" 
            onClick={() => changeMenuAnimation(!menuAnimation)}  
            aria-label="Main Menu">
            <HamburguerIcon/>
        </button>
    );
};

export default HamburguerMenu;
