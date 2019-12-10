import React, {Component} from 'react';
import '../styles/OwnerForm.css';
import Http from '../helpers/Http'; 
import {Redirect} from "react-router-dom";

class CarForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id_document: null,
      property_document: null,
      plate: null,
      color:null, 
      model: null,
      brand: null,
      year: null,
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const car = this.state;
    
    let carUrl = 'http://localhost:3001/cars';
    let requestData = this.formatRequest(car);
    
    await Http.post(carUrl, requestData).then((response) => {
      console.log(response);
      this.setState({ redirect: true });
      alert('Tu auto ha sido registrado!');
    }).catch((error) => {
      let errorStatus = error.message.split(" ")[5];
      if (errorStatus === '404') {
        alert('No hay ningun propietario registrado con esta identificacion!');
      } else if (isNaN(errorStatus) === false) {
        alert('Error en la informacion del auto!');
      }
    });
  }

  formatRequest(car) {
    let formatedData = {
      car: {
        property_document: car.property_document,
        plate: car.plate,
        color: car.color,
        model: car.model,
        brand: car.brand,
        year: car.year
      },
      owner: {
        id_document: car.id_document
      }
    }

    return formatedData;
  }

  handleInputChange(event) {
    event.preventDefault();
    
    this.setState({
      [event.target.name]: event.target.value
  })
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/'/>;
    }

    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h4> Los datos de tu auto </h4>
          <div className="form-pairs">
            <input type="text" placeholder="Tarjeta de propiedad" name="property_document" 
              className="field" onChange={this.handleInputChange}/>
            <input type="text" placeholder="Placa" name="plate" 
              className="field" onChange={this.handleInputChange}/>
          </div>
          <div className="form-pairs">
            <input type="text" placeholder="Color" name="color"
              className="field" onChange={this.handleInputChange}/>
            <input type="text" placeholder="Modelo" name="model" 
              className="field" onChange={this.handleInputChange}/>
          </div>
          <div className="form-pairs">
            <input type="text" placeholder="Marca" name="brand" 
              className="field" onChange={this.handleInputChange}/>
            <input type="text" placeholder="Año" 
              name="year" className="field" onChange={this.handleInputChange}/>
          </div>

          <h4> Tus datos personales </h4>
          <input type="text" placeholder="Documento de identidad" 
              name="id_document" className="field" onChange={this.handleInputChange}/>
          
          <p><button className="submit-btn">Registrar auto</button></p>
        </form>
      </div>
    )
  }
}

export default CarForm;