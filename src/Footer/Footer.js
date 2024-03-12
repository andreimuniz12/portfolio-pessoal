import React,{useState} from 'react';
import './Footer.css';
import emailImg from '../assets/Footer-icons/icon-email.png';
import whatsappImg from '../assets/Footer-icons/icon-whatsapp.png';

function Footer(){
    const numeroWhatsApp = "5549999316077"
    const [email] = useState('fonsecamuniza@gmail.com')
    
    
    const handleClick = () => {
        window.open(`https://api.whatsapp.com/send?phone=${numeroWhatsApp}`,'_blank')
    }
    
    const emailClipboard = () => {
        navigator.clipboard.writeText(email)
        .then(()=>{
            alert('E-mail copiado com sucesso');
        }) 
        .catch(err => {
            console.error('Erro ao copiar o email',err)
        }) 
    }
    
    return(
        <footer className='footer' id='contato'>
            <div className='footer-container'>
                <h2>Contatos</h2>
              
                <div className='images-container'>
                    <div className='image-footer'>
                        <a onClick={ emailClipboard}  target='_blank'>
                            <img src={emailImg}></img>
                        </a>
                        <p>fonsecamuniza@gmail.com</p>
                </div>
                    <div className='image-footer'>
                        <a onClick={ handleClick }>
                            <img src={whatsappImg}></img>
                        </a>
                        <p>+55 49 99931-6077</p>
                    </div>
                </div>

                <p>© Copyright 2024 Andrei Muniz Todos os direitos reservados.</p>
            </div>
        </footer> 
    );
}

export default Footer;