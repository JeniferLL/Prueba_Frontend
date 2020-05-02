import React from 'react';
import './App.css';
import astronauta from './images/component2.png';
import imagina from './images/component3.png';
import explora from './images/component4.png';
import conquista from './images/component5.png';
import equipo from './images/component6.png';
import sec4 from './images/component7.png';
import sec41 from './images/component8.png';
import Button1 from './components/Button1';
import Footer from './components/Footer';
import Header from './components/Header';
import Registro from './components/Registro';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App" id="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/registro" component={Registro}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="Home">
    <Header/>
    <section className="App-section">
      <figure>
          <img src={astronauta} className="img-astronauta" alt="astronauta" />
      </figure>
      <article>
        <p className="f1">Desarrolla todo</p> <p className="f2">tu POTENCIAL</p>
        <p className="f3">dentro del equipo</p>
        <p className="f4">ATOMIC</p> <p className="f5">LABS</p>
        <div className="boton1"> <Button1 /> </div>
      </article>
    </section>

    <section className="App-section2">
      <div>
        <label className="l1">SOMOS EL BRAZO DERECHO</label> <br/>
        <label className="l2" style={{marginBottom: "60px"}}>DE LA TECNOLOGÍA</label>
      </div>
      <div className="d-flex justify-content-center">
        <div className="card1">
          <img src={explora} className="img-explora" alt="explora"/>
          <p> EXPLORA </p>
          <ul className="text-left">
            <li>Innovación y creación tecnológica</li>
            <li>UI/UX</li>
            <li>Innovación</li>
          </ul>
        </div>
        <div className="card2">
          <img src={imagina} className="img-imagina" alt="imagina"/>
          <p> IMAGINA </p>
          <ul className="text-left">
            <li>Estrategia digital</li>
            <li>Big data & Analysis</li>
            <li>Consultoría Tecnológica</li>
            <li> Reducción de costos TI</li>
          </ul>
        </div>
        <div className="card3">
          <img src={conquista} className="img-conquista" alt="conquista"/>
          <p> CONQUISTA </p>
          <ul className="text-left">
            <li>Desarrollo tecnológico a la medida</li>
            <li>Ciberseguridad</li>
            <li>Servicios en la nube</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="App-section3">
      <div>
        <label className="l3">!TE ENCANTARÁ</label> <br/>
        <label className="l4" style={{marginBottom: "20px"}}>TRABAJAR CON NOSOTROS!</label>
      </div>
      <img src={equipo} className="img-equipo" alt="equipo"/>
      <div className="d-flex justify-content-center">
        <p className="sec3">Contratación remota</p> <i className="fas fa-arrow-right"></i>
        <p className="sec3">Entrevistas con el área de RH</p><i className="fas fa-arrow-right"></i>
        <p className="sec3">Prueba pŕactica</p> <i className="fas fa-arrow-right"></i>
        <p className="sec3">Entrevista técnica</p>
      </div>
      <div className="d-flex justify-content-center" style={{marginTop: "40px"}}> <Button1/> </div>
    </section>

    <section className="App-section4">
      <div>
        <label className="l3">¿POR QUÉ</label>
        <label className="l4">&nbsp;ATOMIC?</label>
      </div>
      <div className="d-flex justify-content-center">
        <div className="cards4">
          <img src={sec4} className="img-seccion4" alt="explora"/>
          <ul className="text-left"> <li>Usamos las tecnologías más modernas</li> <li>Innovamos y creamos proyectos retadores</li> </ul>
        </div>
        <div className="cards4" style={{marginRight:"9vw", marginLeft:"9vw"}}>
          <img src={sec41} className="img-seccion4" alt="imagina"/>
          <ul className="text-left"> <li>Trabajamos en equipo rumbo al éxito</li>  <li>No tenemos código de vestimenta</li>  </ul>
        </div>
        <div className="cards4">
          <img src={sec4} className="img-seccion4" alt="conquista"/>
          <ul className="text-left"> <li>Realizamos actividades para tu bienestar</li> <li>!Tenemos un parque frente a la oficina!</li> </ul>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Características</th>
              <th scope="col">OTROS</th>
              <th scope="col">ATOMIC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-left">Equipo inclusivo y honesto</th>
              <td><i className="fas fa-check-circle"></i> </td>
              <td><i className="fas fa-check-circle"></i></td>
            </tr>
            <tr>
              <th scope="row" className="text-left">Puntualidad es nuestro segundo nombre</th>
              <td><i className="fas fa-check-circle"></i></td>
              <td><i className="fas fa-check-circle"></i></td>
            </tr>
            <tr>
              <th scope="row" className="text-left">Siempre innovamos en nuestros productos</th>
              <td><i className="fas fa-check-circle"></i></td>
              <td><i className="fas fa-check-circle"></i></td>
            </tr>
            <tr>
              <th scope="row" className="text-left">Te ayudamos a crecer e implementar nuevos conocimientos</th>
              <td></td>
              <td><i className="fas fa-check-circle"></i></td>
            </tr>
            <tr>
              <th scope="row" className="text-left">Nos preocupamos por tu bienestar</th>
              <td></td>
              <td><i className="fas fa-check-circle"></i></td>
            </tr>
            <tr>
              <th scope="row" className="text-left">El respeto es una parte fundamental</th>
              <td></td>
              <td><i className="fas fa-check-circle"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center" style={{marginTop: "40px", marginBottom:"40px"}}> <Button1/> </div>
    </section>
    <Footer/>
  </div>
);

export default App;
