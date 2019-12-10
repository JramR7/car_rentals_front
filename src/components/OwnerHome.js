import React from 'react';
import homeImg from '../assets/home.png';
import '../styles/OwnerHome.css';
import {Link} from 'react-router-dom';

function OwnerHome() {
  return(
    <div className="Home">
      <header className="App-header">
        <h2 className="home-title"> Car Rentals </h2>
        <img src={homeImg} className="home-image"/>
        <div className="buttons">
        <Link to="/OwnerRegister" style={{color: 'white'}}>
          <button className='option-button'>
            Registrate como propietario
          </button>
        </Link>
        <Link to="/carRegister" style={{color: 'white'}}>
          <button className='option-button'>
            Registra tu auto
          </button>
        </Link>
        </div> 
      </header>
    </div>
  )
}



export default OwnerHome;