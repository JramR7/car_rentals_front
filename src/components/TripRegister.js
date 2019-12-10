import React from 'react';
import TripForm from './TripForm';
import '../styles/OwnerRegister.css';

function TripRegister() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{marginTop: '2%', marginBottom: '1%'}}> Registra tu viaje! </h2>
        <TripForm/>
      </header>
    </div>
  );
}

export default TripRegister;
