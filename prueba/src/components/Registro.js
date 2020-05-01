import React, {Component} from 'react'
import './components.css';
import Header from './Header';
import Footer from './Footer';
import regAstronauta from './images/components-reg1.png';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Registro extends Component{
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      l1: 'TE QUEREMOS',
      l2: 'CONOCER',
      p: 'Queremos saber quién eres tú, ingresa los siguientes datos:',
      img: '/static/media/components-reg1.a33193ff.png'
    }
  }
  handleSubmit = (event) => {
   if(this.state.num==1){
     this.setState({
       num: 2,  l1: 'VALIDA TU', l2: 'CELULAR',
       p: 'Necesitamos validar tu número para continuar. Ingresa tu número a 10 dígitos y te enviaremos un código SMS.'
     })
   }
   else if (this.state.num==2) {
     this.setState({
       num: 3,  l1: 'CÓDIGO DE', l2: 'VERIFICACIÓN',
       p: 'Te enviamos un SMS al número:'
     })
   }
   else if (this.state.num==3) {
     this.setState({
       num: 4,  l1: 'TÉRMINOS Y', l2: 'CONDICIONES',
       p: 'Por favor revisa nuestros términos y condiciones para este servicio:'
     })
   }
   event.preventDefault();
  }
  render (){
    return(
      <div className="Registro">
        <Header/>
        <div className="section-reg d-flex justify-content-start">
          <section className="datos ">
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}></div>
            </div>
            <div className="titulo d-flex justify-content-start">
              <div className="circle">{this.state.num}</div> <label className="l1 font-s">{this.state.l1}</label>
              <label className="l4 font-s">&nbsp;{this.state.l2}</label>
            </div>
            <p style={{textAlign :"left", marginTop:"30px", fontSize:"3vmin"}}>{this.state.p}</p>
            <form onSubmit={this.handleSubmit} className="">
              <label>Nombre (s)<input type="text"  />
              </label><br/>
              <label>Apellidos<input type="text"  />
              </label><br/>
              <input type="submit" value="Enviar" />
            </form>
          </section>
          <figure className="reg-figure">
              <img src={this.state.img} className="reg-astronauta" alt="reg-astronauta" />
          </figure>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Registro;
