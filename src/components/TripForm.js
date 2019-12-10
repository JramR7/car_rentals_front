import React, {Component} from 'react';
import '../styles/TripForm.css';
import Http from '../helpers/Http'; 
import {Redirect} from "react-router-dom";
import { GoogleComponent } from 'react-google-location';

const API_KEY = 'AIzaSyAF2Wne0Tdx5sryur1Of8aYRGGjQKuEWpM';

class TripForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      owner_document: null,
      car_plate: null,
      name: null,
      phone: null,
      email: null,
      id_document: null,
      address: null,
      origin: null,
      destination: null,
      origin_lat: null,
      origin_long: null,
      destination_lat: null,
      destination_long: null,
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const trip = this.state;
    
    let rentalUserUrl = 'http://localhost:3001/rental_users';
    let contractUrl = 'http://localhost:3001/contracts';
    let requestData = this.formatRequest(trip);
    let rentalUserData = requestData[0];
    let tripData = requestData[1];

    await Http.post(rentalUserUrl, rentalUserData).then(async (response) => {
      console.log(response);
      
      await Http.post(contractUrl, tripData).then((response) => {
        console.log(response);
        this.setState({ redirect: true });
        alert('Tu viaje ha sido registrado, el contrato de tu viaje esta en tu correo');
      }).catch((error) => {
        let errorStatus = error.message.split(" ")[5];
        if (isNaN(errorStatus) === false) {
          alert('Error en la informacion del viaje!');
        }
      });

    }).catch((error) => {
      let errorStatus = error.message.split(" ")[5];
      if (isNaN(errorStatus) === false) {
        alert('Error en la informacion del usuario!');
      }
    });
    
  }

  formatRequest(trip) {
    let rentalUserData = {
      user: {
        name: trip.name,
        phone: trip.phone,
        email: trip.email,
        id_document: trip.id_document,
        address: trip.address
      }
    }

    let contractData = {
      rental_user: {
        id_document: trip.id_document
      },
      owner: {
        id_document: trip.owner_document,
        car_plate: trip.car_plate
      },
      trip: {
        lat_origin: trip.origin_lat,
        long_origin: trip.origin_long,
        lat_destination: trip.destination_lat,
        long_destination: trip.destination_long,
        address_origin: trip.origin,
        address_destination: trip.destination
      },
    }

    return [rentalUserData, contractData];
  }

  handleInputChange(event) {
    event.preventDefault();
    
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state);
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/'/>;
    }

    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-pairs">
            <div style={{width: '35%', marginRight: '1%'}}>
              <h4> Datos del origen </h4>
              <GoogleComponent
                apiKey={API_KEY}
                language={'es'}
                country={'country:co'}
                coordinates={true}
                onChange={(loc) => { 
                  this.setState({ 
                    origin: loc.place, 
                    origin_lat: loc.coordinates.lat, 
                    origin_long: loc.coordinates.lng
                  }) 
                }}/>
            </div> 

            <div style={{width: '35%'}}>
              <h4> Datos del destino </h4>
              <GoogleComponent
                apiKey={API_KEY}
                language={'es'}
                country={'country:co'}
                coordinates={true}
                onChange={(loc) => { 
                  this.setState({ 
                    destination: loc.place, 
                    destination_lat: loc.coordinates.lat, 
                    destination_long: loc.coordinates.lng
                  }) 
                }}/>
            </div> 
          </div>
          

          <h4> Datos personales - propietario </h4>
          <input type="text" placeholder="Documento de identidad Propietario" 
              name="owner_document" className="field" onChange={this.handleInputChange}/>
          <input type="text" placeholder="Placa del auto" 
              name="car_plate" className="field" onChange={this.handleInputChange}/>
          <h4> Datos personales - usuario </h4>
          <div className="form-pairs">
            <input type="text" placeholder="Nombre usuario" name="name" 
              className="field" onChange={this.handleInputChange}/>
            <input type="text" placeholder="Telefono usuario" name="phone" 
              className="field" onChange={this.handleInputChange}/>
          </div>
          <div className="form-pairs">
            <input type="text" placeholder="Email usuario" name="email"
              className="field" onChange={this.handleInputChange}/>
            <input type="text" placeholder="identificacion usuario" name="id_document" 
              className="field" onChange={this.handleInputChange}/>
          </div>
          <div className="form-pairs">
            <input type="text" placeholder="direccion usuario" name="address" 
              className="field" onChange={this.handleInputChange}/>
          </div>     
          <p><button className="submit-btn">Registrar viaje</button></p>
        </form>
      </div>
    )
  }
}

export default TripForm;