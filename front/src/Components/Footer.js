import React, { Component } from "react";
import { Container, ButtonGroup, Button, Row, Col } from "react-bootstrap";
import instagram from "./Pictures/instagram-social-network-logo-of-photo-camera.png";
import fasebook from "./Pictures/facebook-logo.png";
import twitter from "./Pictures/twitter-social-logotype.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-primary text-white p-3 navbar-fixed-bottom">
        <Container>
          <Row>
            <Col md={4}>
              <h3 className="text-center">Наш адрес:</h3>
              <p className="text-center">ул. Достоевского, 8</p>
            </Col>
            <Col md={4}>
              <h3 className="text-center">Телефоны для заказа:</h3>
              <ul className="list-inline text-center">
                <li>+38-095-123-45-67</li>
                <li>+38-063-123-45-67</li>
                <li>+38-067-123-45-67</li>
              </ul>
            </Col>
            <Col md={4} className="text-center">
              <ButtonGroup text-align="center">
                <Button>
                  <a href="https://www.instagram.com/">
                    <img
                      src={instagram}
                      width="30"
                      height="30"
                      alt="instagram"
                    />
                  </a>
                </Button>
                <Button>
                  <a href="https://www.facebook.com/">
                    <img src={fasebook} width="30" height="30" alt="fasebook" />
                  </a>
                </Button>
                <Button>
                  <a href="https://twitter.com/">
                    <img src={twitter} width="30" height="30" alt="twitter" />
                  </a>
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
