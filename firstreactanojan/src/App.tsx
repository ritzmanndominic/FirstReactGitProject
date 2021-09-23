import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://editorial.uefa.com/resources/026d-1322fdaf7f6f-8fa6c9c0dc71-1000/ucl.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Champions League</h3>
      <p>Table Season 21/22</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://editorial.uefa.com/resources/0257-0defab36368c-41ace7abac25-1000/2015_fc_barcelona.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>FC Barcalona</h3>
      <p>2015 Champions</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.swp.de/imgs/07/8/8/5/1/1/6/2/5/tok_a30bd289550db6faf3eb11b744a59c25/w1176_h662_x750_y422_5FA634004B665539.jpg-f8c6de4a37ee3235.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Trophy</h3>
      <p>The Champions League Trophy</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default App;
