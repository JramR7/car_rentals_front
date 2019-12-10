import React from 'react';
import OwnerForm from './OwnerForm';
import '../styles/OwnerRegister.css';

function OwnerRegister() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Registrate como propietario! </h2>
        <OwnerForm/>
      </header>
    </div>
  );
}

export default OwnerRegister;
