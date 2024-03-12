import React from 'react';
import'./style.css';
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { FaLinkedin,FaGithub } from "react-icons/fa";

function Main(){
    return(
      <div className='container' id='main'>
        <div className='home'>
            <h3 className='first-title'>OI,EU SOU O ANDREI</h3>
            <div className='home-main'>
              <h1>FRONT-END</h1>
              <h1>DEVELOPER</h1>
            </div>
            <div className='icons'>
              <a href='https://www.linkedin.com/in/andrei-fonseca-17a391261/'><FaLinkedin size={50} className='icon-pi'/></a> 
              <a href='https://github.com/andreimuniz12'><FaGithub size={50} className='icon-pi'/></a> 
              <a href='c:\Users\Arthur\Documents\Documentos Andrei\currículo_Andrei.pdf'><PiIdentificationBadgeLight size={50}className='icon-pi'/></a>
            </div>
            <p>Gosto muito de tecnologia, trabalho com front-end desde 2021, 
              Atualmente eu trabalho com projetos pessoais sempre buscando me aperfeiçoar como profissional afinal o aprendizado é constante.
            </p>
        </div>
    </div>
    )
}
export default Main ;