import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavBar.css';
import homeImg from '../assets/home.png';

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/" style={{color: 'white'}}>
          <img src={homeImg} className="App-logo" alt="logo" />
          <h3>Car rentals</h3>
        </Link>
      </div>
      <ul className="nav-Links">
        <hr/>
        <Link to="/dashboard" style={{color: 'white'}}>
          <li className="nav-Element">Dashboard</li>
        </Link>
        <hr/>
        <Link to="trips" style={{color: 'white'}}>
          <li className="nav-Element">Mis Viajes</li>
        </Link>
        <hr/>
        <Link to="ownerHome" style={{color: 'white'}}>
          <li className="nav-Element">Soy un propietario</li>
        </Link>
        <hr/> 
      </ul>
    </nav>
  );
}

export default NavBar;
