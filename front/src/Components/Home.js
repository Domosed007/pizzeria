import React, { Component } from "react";
import { Carousel, Container, CarouselItem, Card } from "react-bootstrap";
import carousel1 from "./Pictures/Carousel1.jpg";
import cocktail from "./Pictures/cocktail.jpg";
import coffee from "./Pictures/coffee.jpg";
import italy from "./Pictures/italy.jpg";
import open from "./Pictures/open.jpg";
import meet from "./Pictures/meet.jpg";
import friendspizza from "./Pictures/friendspizza.jpg";
import courier from "./Pictures/courier.jpg";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Carousel className="m-2 carousel-fade ">
          <CarouselItem>
            <img className="d-block w-100" src={italy} alt="First open" />
            <Carousel.Caption>
              <h2 className="font-weight-bold display-4">Мы открылись</h2>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img className="d-block w-100" src={open} alt="Second open" />
            <Carousel.Caption>
              <h2 className="font-weight-bold  display-4">Welcome</h2>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
        <h2 className="text-center m-2 font-weight-bold  display-4 text-primary">
          У нас вы можете
        </h2>
        <Carousel className="m-2 carousel-fade">
          <Carousel.Item>
            <img className="d-block w-100" src={carousel1} alt="First slide" />
            <Carousel.Caption>
              <h3>Отведать вкуснейшей пиццы собственного приготовления</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cocktail} alt="First slide" />
            <Carousel.Caption>
              <h3>Выпить освежающий коктейль </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={coffee} alt="First slide" />
            <Carousel.Caption>
              <h3>Выпить бодрящего вкусного кофе</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={meet} alt="First slide" />
            <Carousel.Caption>
              <h3>Провести свидание</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={friendspizza}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>И просто пообщаться с друзьями</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card>
          <Card.Img variant="bottom" src={courier} alt="Courier" />
          <Card.Body>
            <Card.Title>
              <h3 className="text-center text-primary">
                Также вы у нас можете сделать заказ с доставкой
              </h3>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
