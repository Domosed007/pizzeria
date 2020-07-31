import React, { Component } from "react";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";

import Pizza from "./Menu/Pizza";
import Drinks from "./Menu/Drinks";
import Salad from "./Menu/Salat";

export default class Menu extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="pizza">
          <Row>
            <Col md={3}>
              <Nav variant="pills" className="flex-column mt-3 text-center">
                <Nav.Item>
                  <Nav.Link eventKey="pizza">Pizza</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="drinks">Drinks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="salats">Salats</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="pizza">
                  <Pizza />
                </Tab.Pane>
                <Tab.Pane eventKey="drinks">
                  <Drinks />
                </Tab.Pane>
                <Tab.Pane eventKey="salats">
                  <Salad />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
