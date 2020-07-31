import React, { Component } from "react";
import { Container, Table, Button } from "react-bootstrap";

export default class Order extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center text-primary p-3">Оформление заказа</h1>
        <Container className="text-center p-3 m-3 bg-primary">
          <Container className="bg-white">
            <Table striped bordered hover responsive variant="light">
              <thead>
                <th>Заказ</th>
                <th>Количество</th>
                <th>Стоимость</th>
              </thead>
            </Table>
            <h3 className="p-3">Итоговая сумма:</h3>
          </Container>

          <div className="m-1">
            <input
              type="text"
              name="name"
              placeholder="Ф.И.О."
              required
              className="p-1"
            />
          </div>
          <div className="m-1">
            <input
              type="text"
              name="phone"
              placeholder="Телефон"
              required
              className="p-1"
            />
          </div>
          <div className="m-1">
            <input
              type="text"
              name="addres"
              placeholder="Адрес доставки"
              required
              className="p-1"
            />
          </div>
          <Button variant="light" size="lg">
            Заказать
          </Button>
        </Container>
      </Container>
    );
  }
}
