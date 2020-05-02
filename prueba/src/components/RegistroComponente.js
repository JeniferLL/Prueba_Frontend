import React from 'react';
import ReactDOM from 'react-dom';
import './components.css';
import Registro2 from './RegistroVerifica';
import { useForm } from "react-hook-form";
import regAstronauta from './images/component-reg2.png';

export default function RegistroComponente(){
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    ReactDOM.render(
      <Registro2 telefono={data.telefono}/>,
      document.getElementById('section-reg')
    );
  };

  return(
    <div className="section-reg d-flex justify-content-start" >
      <section className="datos ">
        <div className="progress" id="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}></div>
       </div>
        <div className="titulo d-flex justify-content-start">
          <div className="circle">2</div>
          <label className="l1 font-s">VALIDA TU</label>
          <label className="l4 font-s">&nbsp;CELULAR</label>
        </div>
        <p style={{textAlign :"left", marginTop:"30px", fontSize:"3vmin"}}>Necesitamos validar tu número para continuar.</p>
        <p style={{textAlign :"left", marginTop:"5px", fontSize:"2.5vmin"}}>Ingresa tu número a 10 dígitos y te enviaremos un código SMS.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <label className="d-flex p-2" style={{margin:"5px 0 0 0"}}>Número de Celular</label>
          <input className="d-flex p-2" type="text" name="telefono" ref={register({minLength: {value:10, message: "El número debe ser de 10 dígitos"}, maxLength: {value:10, message: "El número debe ser de 10 dígitos"}, pattern: {value: /^[5]+[5]+[0-9]*$/i, message:"Debe ingresar números empezando con 55"}, required: "Campo obligatorio"  })}/>
           {errors.telefono && <p className="d-flex p-2" style={{fontSize:"2vmin"}}>{errors.telefono.message}</p>}
          <input type="submit" value="Continuar" />
        </form>
      </section>
      <figure className="reg-figure">
          <img src={regAstronauta} className="reg-astronauta" alt="reg-astronauta" />
      </figure>
    </div>
  );
}
