import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll'


function Navbar(){
    
    const [isMenuOpen, setMenuOpen] = useState(false);
    

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


    return(
    <nav className='menu-container'>
        <div className={`hamburger-container ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className='line-1'></div>
            <div className='line-2'></div> 
            <div className='line-3'></div>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <li ><Link to="main" spy={true} smooth={true} offset={-150 } duration={0}>Home</Link></li>
            <li><Link to="sobre" spy={true} smooth={true} offset={-180} duration={0}>Sobre</Link></li>
            <span></span>
            <li> <Link to="projetos" spy={true} smooth={true} offset={-200} duration={0}>Projetos</Link></li>
            <li ><Link to="habilidades" spy={true} smooth={true} offset={-100} duration={0}>Tecnologias</Link></li>
            <li ><Link to="contato" spy={true} smooth={true} offset={-100} duration={0}>Contato</Link></li>
        </ul>
    </nav>
);
   

}



export default Navbar;