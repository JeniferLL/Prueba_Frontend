import React, {Component} from 'react'
import './components.css';
import twitter from './images/component7.png';
import linkedin from './images/component8.png';

class Footer extends Component{
  render (){
    return(
      <footer className="d-flex align-items-center">
        <p style={{marginLeft:"8vw"}}>© 2020 AtomicLabs. Todos los derechos reservados.</p>
        <p style={{marginLeft:"28vw"}}>Aviso de privacidad</p>
        <a style={{marginLeft:"10vw"}} className="a-link" href="https://www.linkedin.com/company/atomic-mexico?trk=similar-pages_result-card_full-click">
          <img src={linkedin} className="img-linkedin"/> </a>
        <a style={{marginLeft:"5vw"}} className="a-link" href="https://twitter.com/atomicmexico?lang=es">
          <img src={twitter} className="img-twitter"/> </a>
      </footer>
    );
  }
}

export default Footer;
