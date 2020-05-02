import React from 'react';
import ReactDOM from 'react-dom';
import './components.css';
import { useForm } from "react-hook-form";
import Registro2 from './RegistroComponente';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import regAstronauta from './images/components-reg1.png';

export default function Registro(){
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    ReactDOM.render(
      <Registro2 />,
      document.getElementById('section-reg')
    );

  };

  return(
    <div className="Registro">
      <Header/>
      <div className="section-reg d-flex justify-content-start" id="section-reg">
        <section className="datos" >
          <div className="progress" >
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}></div>
         </div>
         <div className=" d-flex justify-content-start">
          <p style={{textAlign :"left", fontSize:"1.9vmin", marginTop:"10px", color:"white"}} ><u>Regresar</u> </p>
         </div>
         <div className="titulo d-flex justify-content-start">
            <div className="circle">1</div>
            <label className="l1 font-s">TE QUEREMOS</label>
            <label className="l4 font-s">&nbsp;CONOCER</label>
          </div>
          <p style={{textAlign :"left", marginTop:"30px", fontSize:"3vmin"}}>Queremos saber quién eres tú, ingresa los siguientes datos:</p>

          <form onSubmit={handleSubmit(onSubmit)} className="">
            <label className="d-flex p-2" style={{margin:"5px 0 0 0"}}>Nombre (s)</label>
            <input className="d-flex p-2" type="text" name="nombre" ref={register({minLength: {value:3, message: "El nombre debe tener mínimo 3 caracteres"}, pattern: {value: /^[A-Za-zñÑáéíóúÁÉÍÓÚ]*[\s]*[A-Za-zñÑáéíóúÁÉÍÓÚ]*$/i, message:"Ejemplo: José Carlos "}, required: "Campo obligatorio"  })}/>
              {errors.nombre && <p className="d-flex p-2" style={{fontSize:"2vmin"}}>{errors.nombre.message}</p>}
            <label className="d-flex p-2" style={{margin:"5px 0 0 0"}}>Apellidos</label>
            <input className="d-flex p-2" type="text" name="apellidos" ref={register({minLength: {value:3, message: "El apellido debe tener mínimo 3 caracteres"}, pattern: {value: /^[A-Za-zñÑáéíóúÁÉÍÓÚ]*[\s]*[A-Za-zñÑáéíóúÁÉÍÓÚ]*$/i, message:"Ejemplo: Hernández Ramírez"}, required:"Campo obligatorio" })} />
              {errors.apellidos && <p className="d-flex p-2" style={{fontSize:"2vmin"}}>{errors.apellidos.message}</p>}
            <input type="submit"  value="Enviar" />
          </form>
        </section>

        <figure className="reg-figure">
            <img src={regAstronauta} className="reg-astronauta" alt="reg-astronauta" />
        </figure>
      </div>
      <Footer/>
    </div>
  );
}
