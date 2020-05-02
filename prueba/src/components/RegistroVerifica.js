import React from 'react';
import ReactDOM from 'react-dom';
import './components.css';
import Registro2 from './RegistroTerminos';
import { useForm } from "react-hook-form";
import regAstronauta from './images/component-reg2.png';

export default function RegistroComponente(props){
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    ReactDOM.render(
      <Registro2 />,
      document.getElementById('section-reg')
    );
  };

  return(
    <div className="section-reg d-flex justify-content-start" >
      <section className="datos ">
        <div className="progress" id="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}></div>
       </div>
        <div className="titulo d-flex justify-content-start">
          <div className="circle">3</div>
          <label className="l1 font-s">CÓDIGO DE</label>
          <label className="l4 font-s">&nbsp;VERIFICACIÓN</label>
        </div>
        <p style={{textAlign :"left", marginTop:"30px", fontSize:"3vmin"}}>Te enviamos un SMS al número:</p>
        <p style={{textAlign :"left", fontSize:"3vmin"}}>{props.telefono}</p>
        <p style={{textAlign :"left", marginTop:"10px", fontSize:"2.5vmin"}}>Ingresa el código de verificación:</p>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <label className="d-flex p-2" style={{margin:"5px 0 0 0",fontSize:"2.5vmin" }}>Código de verificación (6 números)</label>
          <input className="d-flex p-2" type="text" name="telefono" ref={register({minLength: {value:6, message: "El código es de 6 dígitos"}, maxLength: {value:6, message: "El código es de 6 dígitos"}, pattern: {value: /^[0-9]*$/i, message:"Debe ingresar números"}, required: "Campo obligatorio"  })}/>
           {errors.telefono && <p className="d-flex p-2" style={{fontSize:"2vmin"}}>{errors.telefono.message}</p>}
          <input type="submit" value="Validar código" />
        </form>
      </section>
      <figure className="reg-figure">
          <img src={regAstronauta} className="reg-astronauta" alt="reg-astronauta" />
      </figure>
    </div>
  );
}
