import React, {useContext, useState} from 'react'
import './style2.css';
// import Button from './Button';
import RiceappsLogo from './../riceappslogo.png'
import { DarkModeContext } from '../App.js';

function NavBar({ getDarkMode, setDarkMode }){

    let whichMode = useContext(DarkModeContext)

    const primaryColor = whichMode ? "black" : "white";
    const secondaryColor = whichMode ? "white" : "black";

    return(
        <nav className = "navContainer" style={{backgroundColor: primaryColor}}>

            <img src = {RiceappsLogo} className = "navLogo"/>

            <button 
                
                onClick={() => setDarkMode(!getDarkMode)}
                className="navDarkModeButton"
                style={{backgroundColor: secondaryColor, color: primaryColor }}
            >
                {whichMode ? 'Disable' : 'Enable' } Dark Mode
            </button>

            
        </nav>
    )
}

export default NavBar