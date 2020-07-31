import React, { Component } from "react";
import { Container, Carousel } from "react-bootstrap";
import italy from "./Pictures/italy.jpg";
import design1 from "./Pictures/design1.jpg";

export default class AboutUs extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center text-primary m-2">О нас</h1>

        <Carousel className="m-2">
          <Carousel.Item>
            <img src={italy} className="d-block w-100" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={design1} className="d-block w-100" alt="" />
          </Carousel.Item>
        </Carousel>
        <h3 className="m-2 text-center text-primary">
          Мы открылись и теперь готовы радовать наших дорогих посетителей
          вкусной едой, вниманием и уютом
        </h3>
      </Container>
    );
  }
}
