import React, {Component} from 'react';
import '../styles/TripForm.css';
import Http from '../helpers/Http'; 
import '../styles/Charts.css';
import CanvasJSReact from '../helpers/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Charts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersQuantOptions: null
    }
    this.getUsersQuant = this.getUsersQuant.bind(this);
    this.setUserQuant = this.setUserQuant.bind(this);
  }

  componentDidMount() {
    this.getUsersQuant();
  }

  async getUsersQuant() {
    let quantUrl = 'http://localhost:3001/count_users';
  
    await Http.get(quantUrl).then((response) => {
      this.setUserQuant(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  
  setUserQuant(usersQuant) {
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      responsive:true,
      backgroundColor: '#282c34',
      title: {
        text: "Cantidad de usuarios en la plataforma",
        fontColor: 'white',
      },
      data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}",
        indexLabelFontSize: 18,
        indexLabel: "{label} - {y}",
        indexLabelFontColor: 'white',
        dataPoints: [
          { y: usersQuant['users'], label: "Usuarios totales",  },
          { y: usersQuant['owners'], label: "Propietarios" },
          { y: usersQuant['rental_users'], label: "Usuarios" },
        ]
      }]
    }
    this.setState({usersQuantOptions: options});
  }

  contractOptions() {
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      responsive:true,
      backgroundColor: '#282c34',
      title: {
        text: "Crecimiento de viajes",
        fontColor: 'white',
      },
      data: [{				
                type: "column",
                fontColor: 'white',
                dataPoints: [
                    { label: "Enero",  y: 10 },
                    { label: "Febrero", y: 15  },
                    { label: "Marzo", y: 25  },
                    { label: "Abril",  y: 30  },
                    { label: "Mayo",  y: 28  }
                ]
       }]
   }
    return options;
  }

  sellsOptions() {
    const options = {
			exportEnabled: true,
      animationEnabled: true,
      responsive:true,
      backgroundColor: '#282c34',
      title: {
        text: "Crecimiento de ventas",
        fontColor: 'white',
      },
			axisX:{
				valueFormatString: "DD MMM",
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY: {
				includeZero: false,
				valueFormatString: "$##0.00",
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: function(e) {
						return "$" + CanvasJS.formatNumber(e.value, "##0.00");
					}
				}
			},
			data: [{
				type: "area",
				xValueFormatString: "DD MMM",
				yValueFormatString: "$##0.00",
				dataPoints: [
				  { x: new Date("2019-03-01"), y: 85.3},
				  { x: new Date("2019-03-02"), y: 83.97},
				  { x: new Date("2019-03-05"), y: 83.49},
				  { x: new Date("2019-03-06"), y: 84.16},
				  { x: new Date("2019-03-07"), y: 84.86},
				  { x: new Date("2019-03-08"), y: 84.97},
				  { x: new Date("2019-03-09"), y: 85.13},
				  { x: new Date("2019-03-12"), y: 85.71},
				  { x: new Date("2019-03-13"), y: 84.63},
				  { x: new Date("2019-03-14"), y: 84.17},
				  { x: new Date("2019-03-15"), y: 85.12},
				  { x: new Date("2019-03-16"), y: 85.86},
				  { x: new Date("2019-03-19"), y: 85.17},
				  { x: new Date("2019-03-20"), y: 85.99},
				  { x: new Date("2019-03-21"), y: 86.1},
				  { x: new Date("2019-03-22"), y: 85.33},
				  { x: new Date("2019-03-23"), y: 84.18},
				  { x: new Date("2019-03-26"), y: 85.21},
				  { x: new Date("2019-03-27"), y: 85.81},
				  { x: new Date("2019-03-28"), y: 85.56},
				  { x: new Date("2019-03-29"), y: 88.15}
				]
			}]
    }
    return options;
  }

  render() {
    console.log(this.contractOptions());
    return(
      <div className="grid-container">
        <div className="grid-item">
          <CanvasJSChart 
            options={this.state.usersQuantOptions}
          />
        </div>
        <div className="grid-item">
          <CanvasJSChart 
            options={this.contractOptions()}
          />
        </div>
        <div className="grid-item">
          <CanvasJSChart 
            options={this.sellsOptions()}
          />
        </div>
      </div>      
    )
  }
}

export default Charts;