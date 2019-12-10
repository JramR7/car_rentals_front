import React from 'react';
import '../styles/Home.css';
import NavBar from "./NavBar";
import slider1 from '../assets/1.jpg';
import slider2 from '../assets/2.jpg';
import slider3 from '../assets/3.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Home() {
  return(
    <div className="Home">
      <header className="App-header">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} className='carousel'>
          <div className="carousel-Img">
              <img src={slider1} />
          </div>
          <div className="carousel-Img">
              <img src={slider2} />
          </div>
          <div className="carousel-Img">
              <img src={slider3} />
          </div>
        </Carousel>
      </header>
    </div>
  )
}



export default Home