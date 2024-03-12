import React from "react";
import './Projetos.css';
import LeftImage from "../assets/mockups/pc_mockup.png";
import RightImage from "../assets/mockups/mockup.1.png";

function MyProjects(){
    return( 
    <div className='mockup-container' id="projetos">
        <h1>PROJETOS QUE EU TRABALHEI</h1>
            
        <div className='mockups-photo'>
            <div className="mockup-left">
                <h1>Cardápio Digital React js + Vite</h1>
                <img src={LeftImage}></img>
                <p>
                    Cardapio Digital onde você pode ver
                    os pratos principais,sobremesas e bebidas,tudo muito dinâmico e intuitivo
                    usei técnologias como react js e vite que é um servidor de desenvolvimento local .
                </p>
                <div className='botoes'>
                    <button type="button"><a href='https://cardapio-digital-hksc3dygw-andreimuniz12.vercel.app/'>VER PROJETO ONLINE</a></button>
                    <button type="button"><a href='https://github.com/andreimuniz12/cardapio-digital'>IR PARA REPOSITÓRIO</a></button>
                </div>
            </div>

            <div className='mockup-right'>
                <h1>App E-commerce React Native</h1>
                <img src={RightImage}></img>
                <p>Um E-commerce de suspensões a ar para carros feito em react native, 
                   Ainda em desenvolvimento. 
                </p>
                <button type="button"><a href='https://github.com/andreimuniz12/surface'>IR PARA REPOSITÓRIO</a></button> 
            </div>
        </div>
    </div>
    );
}

export default MyProjects;