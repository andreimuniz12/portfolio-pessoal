import React from 'react';
import './index.css';
import Navbar from './Navbar/Navbar';
import Sobre from './Main-About/About';
import Main  from './Main/Main';
import MyProjects  from './Projetos/Projetos';
import MySkills from './Skills/Skills';
import Footer  from './Footer/Footer';

function  App () {
    
      
      return (
      <div>
            <Navbar/>
            <Main />
            <Sobre/>
            <MyProjects/>
            <MySkills />
            <Footer/>
      </div>
           
            
      
            


      );
}
export default App;
