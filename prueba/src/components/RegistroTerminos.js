import React from 'react';
import ReactDOM from 'react-dom';
import Exito from './Exito';
import Registro1 from './RegistroVerifica';
import './components.css';
import ModalExample from  './Modal';
import { useForm } from "react-hook-form";
import regAstronauta from './images/component-reg4.png';

export default function RegistroComponente(props){
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    ReactDOM.render(
      <Exito/>,
      document.getElementById('root')
    );
  };
  function regresa(){
    ReactDOM.render(
      <Registro1 />,
      document.getElementById('section-reg')
    );
  }
  return(
    <div className="section-reg d-flex justify-content-start" >
      <section className="datos ">
        <div className="progress" id="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
       </div>
       <div className=" d-flex justify-content-start">
        <p style={{textAlign :"left", fontSize:"1.9vmin", marginTop:"10px"}} onClick={regresa}><u>Regresar</u> </p>
       </div>
        <div className="titulo d-flex justify-content-start">
          <div className="circle">4</div>
          <label className="l1 font-s">TÉRMINOS Y</label>
          <label className="l4 font-s">&nbsp;CONDICIONES</label>
        </div>
        <p style={{textAlign :"left", marginTop:"30px", fontSize:"3vmin"}}>Por favor revisa nuestros términos y condiciones para este servicio:</p>
        <ModalExample/>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <input  type="radio" value="" name="terminos" ref={register({required: "Debe aceptar los términos y condiciones para continuar"  })}/>
          <label style={{margin:"5px 0 0 0",fontSize:"2vmin" }}>Acepto los términos y condiciones</label>
           {errors.terminos && <p className="d-flex p-2" style={{fontSize:"2vmin"}}>{errors.terminos.message}</p>}
          <br/>
          <input type="submit" value="Enviar" />
        </form>
      </section>
      <figure className="reg-figure">
          <img src={regAstronauta} className="reg-astronauta" alt="reg-astronauta" />
      </figure>
    </div>
  );
}
