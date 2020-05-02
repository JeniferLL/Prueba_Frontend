import React, {Component} from 'react'
import './components.css';
import { Link } from 'react-router-dom';

class Header extends Component{
  render (){
    return(
      <header className="d-flex align-items-end">
      <i  className="fas fa-rocket"></i>
      <h1>atomicLabs</h1> 
      </header>
    );
  }
}

export default Header;
