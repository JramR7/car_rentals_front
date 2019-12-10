import React, {Component} from 'react';
import '../styles/OwnerForm.css';
import Http from '../helpers/Http';
import {Redirect} from "react-router-dom";

class OwnerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      phone: null,
      email: null,
      id_document: null,
      address: null,
      licence: null,
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const owner = this.state;
    
    let ownerUrl = 'http://localhost:3001/owners';
    let requestData = this.formatRequest(owner);
    
    await Http.post(ownerUrl, requestData).then((response) => {
      console.log(response);
      this.setState({ redirect: true });
      alert('Tu usuario como propietario ha sido creado!');
    }).catch((error) => {
      let errorStatus = error.message.split(" ")[5];
      if (isNaN(errorStatus) === false) {
        alert('Error en la informacion del propietario!');
      }
    });
  }

  formatRequest(owner) {
    let formatedData = {
      user: {
        name: owner.name,
        phone: owner.phone,
        email: owner.email,
        id_document: owner.id_document,
        address: owner.address
      },
      owner: {
        licence: owner.licence
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
          <h4> Tus datos personales </h4>
          <div className="form-pairs">
            <input type="text" placeholder="Tu nombre" name="name" 
              className="field" onChange={this.handleInputChange}/>
            <input type="text" placeholder="Tu telefono" name="phone" 
              className="field" onChange={this.handleInputChange}/>
          </div>
          <div className="form-pairs">
            <input type="text" placeholder="Tu email" name="email"
              className="field" onChange={this.handleInputChange}/>
            <input type="text" placeholder="Tu cedula" name="id_document" 
              className="field" onChange={this.handleInputChange}/>
          </div>
          <div className="form-pairs">
            <input type="text" placeholder="Tu direccion" name="address" 
              className="field" onChange={this.handleInputChange}/>
            <input type="text" placeholder="Num licencia de conduccion" 
              name="licence" className="field" onChange={this.handleInputChange}/>
          </div>
          <p><button className="submit-btn">Registrarme</button></p>
        </form>
      </div>
    )
  }
}

export default OwnerForm;