import React from 'react';
import'./About.css';
import  profileImg from "../assets/Profile/avatar.png";
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { FaLinkedin,FaGithub } from "react-icons/fa";

function Sobre(){
    return(
        <div className='sobre' id='sobre'>
            <div className='sobre-titulo'>
               <h1>QUEM SOU EU?</h1>
            </div>
              <div className='sobre-informacoes'>
                  <div className='sobre-texto'>
                    <p>ME CHAMO  ANDREI DA FONSECA MUNIZ NASCI E FUI CRIADO EM LAGES-SC TENHO 19 ANOS,
                      ATUALMENTE SOU FREELANCER ESTOU TRABALHANDO EM PROJETOS PESSOAIS.  
                      EU CONHECI A PROGRAMAÇÃO ATRAVÉS DE UM CURSO DE TÉCNICO EM INFORMÁTICA PARA A INTERNET NELE 
                      EU APRENDI VARIAS TECNOLOGIAS COMO HTML,CSS,JAVASCRIPT,REACT ETC...
                      CURSEI ATÉ O 4 MODULO , MAS SEU TIVE QUE TRANCAR POR MOTIVOS PESSOAIS E RESOLVI ESTUDAR DE FORMA AUTODIDATA.</p>
                  </div> 
                  <div className='sobre-foto'> 
                      <img src={profileImg}></img>
                  </div>
              </div>

              <div className='icons-sobre'>
                    <a href='https://www.linkedin.com/in/andrei-fonseca-17a391261/'><FaLinkedin size={35} className='icon-sobre'/></a> 
                    <a href='https://github.com/andreimuniz12'><FaGithub size={35} className='icon-sobre'/></a> 
                    <a href='c:\Users\Arthur\Documents\Documentos Andrei\currículo_Andrei.pdf'><PiIdentificationBadgeLight size={35} className='icon-sobre'/></a>
              </div>
        </div>
    )
}

export default Sobre ;