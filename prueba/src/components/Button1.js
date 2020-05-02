import React, {Component} from 'react'
import './components.css';
import { Link } from 'react-router-dom';

class Button1 extends Component{
  render (){
    return(
      <div className="b1 d-flex align-items-center ">
        <Link className="enlace1" to="/registro" >
         <p>¡Quiero ser parte!</p>
        </Link>
      </div>
    );
  }
}

export default Button1;
