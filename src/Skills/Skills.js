import React from 'react';
import './Skills.css';
import HTMLImage from '../assets/Images/html_1.png';
import CSSImg from '../assets/Images/logo_css.png';
import JSImg from '../assets/Images/logo_js-1.png';
import reactImg from '../assets/Images/logo_reactjs.jpg';
import logoBootstrap from '../assets/Images/logo_bootstrap-1.png';
import reactNative from '../assets/Images/react_native.png';
import gitImg from '../assets/Images/logo_git.png';
import githubImg from '../assets/Images/logo_github.png';
import viteImg from '../assets/Images/logo_vite.png'

function MySkills(){
    return(
       <div className='skill-container'   id='habilidades'>
        <div className='text-skills'><h1>TECNOLOGIAS MAIS USADAS</h1></div>
        <div className='images-skills'>
            <div className='box'><img src={ HTMLImage }></img></div>
            <div className='box'><img src={ CSSImg }></img></div>
            <div className='box'><img src={ JSImg }></img></div>
            <div className='box'><img src={ reactImg }></img></div>
            <div className='box'><img src={ logoBootstrap }></img></div>
            <div className='box'><img src={ reactNative }></img></div>
            <div className='box'><img src={ gitImg }></img></div>
            <div className='box'><img src={ githubImg }></img></div>
            <div className='box'><img src={ viteImg }></img></div>
        </div>
            
       </div> 
    );
}

export default MySkills;