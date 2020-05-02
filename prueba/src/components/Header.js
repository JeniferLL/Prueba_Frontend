import React, {Component} from 'react'
import './components.css';
import { Link } from 'react-router-dom';

class Header extends Component{
  render (){
    return(
      <header className="d-flex align-items-end">
      <i  className="fas fa-rocket"></i>
      <Link to="/" style={{color:"white"}}><h1>atomicLabs</h1> </Link>
      </header>
    );
  }
}

export default Header;
