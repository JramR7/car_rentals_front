import React from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Dashboard from "./components/Dashboard";
import OwnerHome from "./components/OwnerHome";
import OwnerRegister from "./components/OwnerRegister";
import CarRegister from "./components/CarRegister";
import TripHome from "./components/TripHome";
import TripRegister from './components/TripRegister';
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/ownerHome" component={OwnerHome}/>
        <Route path="/ownerRegister" component={OwnerRegister}/>
        <Route path="/trips" component={TripHome}/>
        <Route path="/tripRegister" component={TripRegister}/>
        <Route path="/carRegister" component={CarRegister}/>
      </Switch>
    </Router>
  );
}

export default App;
