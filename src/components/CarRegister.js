import React from 'react';
import CarForm from './CarForm';
import '../styles/OwnerRegister.css';

function CarRegister() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{marginTop: '2%'}}> Registra tu auto! </h2>
        <CarForm/>
      </header>
    </div>
  );
}

export default CarRegister;
