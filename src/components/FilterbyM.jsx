import React, { useState } from 'react';
import '../css/FilterbyM.css'; // Create a CSS file for styling
import { LuFilter } from "react-icons/lu";
import Accord from './AccordionM';

const OffCanvasButton = ({handleCheckboxChange,handleAvailabilityChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="offcanvas-container">
            <h3 onClick={toggleMenu}><span><LuFilter /></span>Filter By</h3>
            {isMenuOpen && <div className="backdrop" onClick={closeMenu}></div>}
            <div className={`offcanvas-menu ${isMenuOpen ? 'open' : ''}`}>
            <span className="close-button" onClick={closeMenu}>close</span>
                <div className="accord-offcanvas">
                  <Accord handleCheckboxChange={handleCheckboxChange} handleAvailabilityChange={handleAvailabilityChange}/>
                </div>    
            </div>
        </div>
    );
};

export default OffCanvasButton;
