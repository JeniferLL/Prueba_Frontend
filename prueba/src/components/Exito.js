import React from 'react';
import './components.css';
import Registro2 from './RegistroComponente';
import Header from './Header';
import Footer from './Footer';
import regAstronauta from './images/component-reg5.png';

export default function Exito(){
  return(
    <div className="Exito">
      <Header/>
      <div className="section-reg d-flex justify-content-start">
        <section className="datos" >
          <div className="titulo" style={{width :"40vw"}}>
            <label style={{marginBottom:"0"}} className="l1 d-flex p-2 font-s">TUS DATOS</label>
            <label style={{textAlign :"left"}} className="l4 d-flex p-2 font-s">HAN SIDO ENVIADOS CON ÉXITO</label>
          </div>
          <p style={{textAlign :"left", marginTop:"30px", fontSize:"3vmin"}}>En breve recibirás más información por parte de AtomicLabs</p>
          <p style={{textAlign :"left", marginTop:"30px", fontSize:"2.5vmin"}}>!Esperamos verte pronto!</p>
        </section>

        <figure className="reg-figure">
            <img src={regAstronauta} className="reg-astronauta" alt="reg-astronauta" />
        </figure>
      </div>
      <Footer/>
    </div>
  );
}
