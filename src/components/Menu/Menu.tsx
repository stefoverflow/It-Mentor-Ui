import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

const Menu = () => {
    const[isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
        <div className="menu-button" onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ?
            <svg style={{ width: '1.4rem', height: '1.4rem' }} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z" fill="white"/>
            </svg>
                    
        :
            <svg style={{ width: '1.8rem', height: '1.2rem' }} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12H6V10H18V12ZM18 7H0V5H18V7ZM18 2H6V0H18V2Z" fill="white"/>
            </svg>
        }
            </div>
            {isOpen && 
                <div className="menu">
                    <Link to="/" className="menu__item">
                        Homepage
                    </Link>
                    <Link to="/client-landing" className="menu__item">
                        User’s start page
                    </Link>
                    <Link to="/mentors" className="menu__item">
                        Mentorski tim
                    </Link>
                </div>
            }
        </>
    );
}

export default Menu;