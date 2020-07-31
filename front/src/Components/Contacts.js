import React, { Component } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
      <Container>
        <Row className="m-2 p-5 text-primary">
          <Col md={6} className="p-3">
            <h3 className="text-center">Наш адрес:</h3>
            <p className="text-center">ул. Достоевского, 8</p>
          </Col>
          <Col md={6} className="p-3">
            <h3 className="text-center">Телефоны для заказа:</h3>
            <ul className="list-inline text-center">
              <li>+38-095-123-45-67</li>
              <li>+38-063-123-45-67</li>
              <li>+38-067-123-45-67</li>
            </ul>
          </Col>
        </Row>

        <Row className="p-5 text-center bg-primary text-white">
          <Col>
            <h3>Доставка</h3>
          </Col>
        </Row>

        <Row className=" p-5 bg-primary text-white text-center">
          <Col md={4} className="p-3">
            <h3>От 200 грн.</h3>
            <h2>БЕСПЛАТНО</h2>
          </Col>
          <Col md={4} className="p-3">
            <h3>До 200 грн.</h3>
            <p>
              При заказе до 200 грн. стоимость доставки по Харькову составляет
              70 грн.
            </p>
          </Col>
          <Col md={4} className="p-3">
            <h3>Время доставки</h3>
            <h2>От 45 мин.</h2>
          </Col>
        </Row>

        <Row className="p-5 text-center text-primary ">
          <Col>
            <h3>Оплата</h3>
            <ListGroup>
              <ListGroup.Item>Наличными при получении курьеру</ListGroup.Item>
              <ListGroup.Item>
                Банковской картой при получении курьеру
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
